<?php
// Shared helpers for the Safari Masti form handlers. Not meant to be called directly.
if (basename($_SERVER['SCRIPT_FILENAME'] ?? '') === '_lib.php') {
    http_response_code(404);
    exit;
}

$configFile = __DIR__ . '/config.php';
$config = is_file($configFile) ? (require $configFile) : [];
if (!is_array($config)) {
    $config = [];
}

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function read_json_body(): array
{
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
        header('Allow: POST');
        respond(405, ['error' => 'Method not allowed.']);
    }
    $raw = file_get_contents('php://input');
    if ($raw === false || strlen($raw) > 65536) {
        respond(400, ['error' => 'Invalid request body.']);
    }
    $data = json_decode($raw, true);
    if (!is_array($data)) {
        respond(400, ['error' => 'Invalid request body.']);
    }
    // Honeypot: real visitors never fill the hidden "company" field.
    if (!empty($data['company'])) {
        respond(200, ['ok' => true]);
    }
    return $data;
}

/** Trimmed single-line string, capped at $max characters (no header-injection characters). */
function clean_line($value, int $max): string
{
    if (!is_string($value) && !is_numeric($value)) {
        return '';
    }
    $value = trim(preg_replace('/[\r\n\t]+/', ' ', (string) $value));
    return mb_substr($value, 0, $max);
}

/** Trimmed multi-line string, capped at $max characters. */
function clean_text($value, int $max): string
{
    if (!is_string($value)) {
        return '';
    }
    $value = trim(str_replace("\r\n", "\n", $value));
    return mb_substr($value, 0, $max);
}

function clean_list($value, int $maxItems = 30): string
{
    if (!is_array($value)) {
        return '';
    }
    $items = [];
    foreach (array_slice($value, 0, $maxItems) as $item) {
        $line = clean_line($item, 100);
        if ($line !== '') {
            $items[] = $line;
        }
    }
    return implode(', ', $items);
}

function clean_int($value, int $max): int
{
    return max(0, min($max, (int) $value));
}

/** Location for lead backups / error logs: the folder above public_html when writable (never served), else api/. */
function log_path(string $name): string
{
    $outside = dirname(__DIR__, 2);
    if (is_dir($outside) && is_writable($outside)) {
        return $outside . '/' . $name;
    }
    return __DIR__ . '/' . $name; // blocked from the web by api/.htaccess
}

function append_log(string $name, string $text): void
{
    @file_put_contents(log_path($name), $text . "\n", FILE_APPEND | LOCK_EX);
}

function send_enquiry(string $subject, string $body, string $replyTo): bool
{
    global $config;

    // Safety net: keep a copy of every enquiry so no lead is ever lost, even if email delivery fails.
    append_log('safarimasti-leads.log', '==== ' . gmdate('c') . " ====\n" . $subject . "\n" . $body . "\n");

    $to = $config['to'] ?? 'safarimasti@gmail.com';
    $from = $config['from'] ?? ('no-reply@' . preg_replace('/^www\./', '', $_SERVER['HTTP_HOST'] ?? 'safarimasti.com'));
    $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

    $headers = [
        'From: Safari Masti Website <' . $from . '>',
        'Reply-To: ' . $replyTo,
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
    ];

    if (!empty($config['smtp_host']) && !empty($config['smtp_user']) && !empty($config['smtp_pass'])) {
        $ok = smtp_send($config, $from, $to, $encodedSubject, $headers, $body);
        if (!$ok) {
            append_log('safarimasti-mail-errors.log', gmdate('c') . ' SMTP send failed: ' . smtp_error());
        }
        return $ok;
    }

    // No SMTP settings: fall back to PHP mail(). Many hosts accept it but inboxes (Gmail) often drop it.
    $ok = mail($to, $encodedSubject, $body, implode("\r\n", $headers), '-f' . $from);
    append_log(
        'safarimasti-mail-errors.log',
        gmdate('c') . ' No SMTP config found (api/config.php); used mail() which returned ' . ($ok ? 'true' : 'false')
    );
    return $ok;
}

/** Last SMTP problem, for logs and check.php. */
function smtp_error(?string $set = null): string
{
    static $last = '';
    if ($set !== null) {
        $last = $set;
    }
    return $last;
}

function smtp_read($socket): string
{
    $response = '';
    while (($line = fgets($socket, 515)) !== false) {
        $response .= $line;
        if (strlen($line) < 4 || $line[3] === ' ') {
            break;
        }
    }
    return trim($response);
}

/** Sends one SMTP command and checks the reply code. $label names the step in error messages (never the secret). */
function smtp_cmd($socket, string $command, string $expect, string $label): bool
{
    fwrite($socket, $command . "\r\n");
    $reply = smtp_read($socket);
    if (strncmp($reply, $expect, strlen($expect)) !== 0) {
        smtp_error($label . ' failed -> ' . $reply);
        return false;
    }
    return true;
}

/** Connects, upgrades to TLS and logs in. Returns the socket, or null (see smtp_error()). */
function smtp_open(array $config)
{
    $host = (string) ($config['smtp_host'] ?? '');
    $port = (int) ($config['smtp_port'] ?? 465);
    $implicitTls = $port === 465;

    $socket = @stream_socket_client(($implicitTls ? 'ssl://' : 'tcp://') . $host . ':' . $port, $errno, $errstr, 15);
    if (!$socket) {
        smtp_error("Could not connect to $host:$port ($errno $errstr)");
        return null;
    }
    stream_set_timeout($socket, 15);

    $greeting = smtp_read($socket);
    if (strncmp($greeting, '220', 3) !== 0) {
        smtp_error('Unexpected greeting from server: ' . $greeting);
        fclose($socket);
        return null;
    }

    $name = $_SERVER['HTTP_HOST'] ?? 'localhost';
    $ok = smtp_cmd($socket, 'EHLO ' . $name, '250', 'EHLO');
    if ($ok && !$implicitTls) {
        $ok = smtp_cmd($socket, 'STARTTLS', '220', 'STARTTLS');
        if ($ok && !stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
            smtp_error('TLS handshake failed');
            $ok = false;
        }
        $ok = $ok && smtp_cmd($socket, 'EHLO ' . $name, '250', 'EHLO after STARTTLS');
    }

    // Google shows App Passwords in groups of four separated by spaces; the spaces are not part of the password.
    $user = (string) ($config['smtp_user'] ?? '');
    $pass = str_replace(' ', '', (string) ($config['smtp_pass'] ?? ''));

    $ok = $ok
        && smtp_cmd($socket, 'AUTH LOGIN', '334', 'AUTH LOGIN')
        && smtp_cmd($socket, base64_encode($user), '334', 'Username')
        && smtp_cmd($socket, base64_encode($pass), '235', 'Login (check the Gmail address and App Password)');

    if (!$ok) {
        fclose($socket);
        return null;
    }
    return $socket;
}

function smtp_send(array $config, string $from, string $to, string $subject, array $headers, string $body): bool
{
    $socket = smtp_open($config);
    if (!$socket) {
        return false;
    }

    $ok = false;
    if (
        smtp_cmd($socket, 'MAIL FROM:<' . $from . '>', '250', 'MAIL FROM')
        && smtp_cmd($socket, 'RCPT TO:<' . $to . '>', '250', 'RCPT TO')
        && smtp_cmd($socket, 'DATA', '354', 'DATA')
    ) {
        $message = implode("\r\n", array_merge(
            $headers,
            ['To: ' . $to, 'Subject: ' . $subject, 'Date: ' . date('r')]
        )) . "\r\n\r\n" . str_replace("\n", "\r\n", $body);
        // Dot-stuffing so a line that is just "." can't end the message early.
        $message = preg_replace('/^\./m', '..', $message);
        fwrite($socket, $message . "\r\n.\r\n");
        $reply = smtp_read($socket);
        $ok = strncmp($reply, '250', 3) === 0;
        if (!$ok) {
            smtp_error('Message rejected -> ' . $reply);
        }
    }

    fwrite($socket, "QUIT\r\n");
    fclose($socket);
    return $ok;
}
