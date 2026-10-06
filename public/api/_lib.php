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

function send_enquiry(string $subject, string $body, string $replyTo): bool
{
    global $config;

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
        return smtp_send($config, $from, $to, $encodedSubject, $headers, $body);
    }

    return mail($to, $encodedSubject, $body, implode("\r\n", $headers), '-f' . $from);
}

/** Minimal SMTP client (implicit TLS on 465 or STARTTLS on 587) with AUTH LOGIN. */
function smtp_send(array $config, string $from, string $to, string $subject, array $headers, string $body): bool
{
    $host = $config['smtp_host'];
    $port = (int) ($config['smtp_port'] ?? 465);
    $implicitTls = $port === 465;

    $socket = @stream_socket_client(
        ($implicitTls ? 'ssl://' : 'tcp://') . $host . ':' . $port,
        $errno,
        $errstr,
        15
    );
    if (!$socket) {
        return false;
    }
    stream_set_timeout($socket, 15);

    $read = function () use ($socket): string {
        $response = '';
        while (($line = fgets($socket, 515)) !== false) {
            $response .= $line;
            if (strlen($line) < 4 || $line[3] === ' ') {
                break;
            }
        }
        return $response;
    };
    $expect = function (string $response, string $code): bool {
        return strncmp($response, $code, strlen($code)) === 0;
    };
    $send = function (string $command) use ($socket): void {
        fwrite($socket, $command . "\r\n");
    };

    try {
        if (!$expect($read(), '220')) {
            return false;
        }
        $send('EHLO ' . ($_SERVER['HTTP_HOST'] ?? 'localhost'));
        if (!$expect($read(), '250')) {
            return false;
        }

        if (!$implicitTls) {
            $send('STARTTLS');
            if (!$expect($read(), '220')) {
                return false;
            }
            if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                return false;
            }
            $send('EHLO ' . ($_SERVER['HTTP_HOST'] ?? 'localhost'));
            if (!$expect($read(), '250')) {
                return false;
            }
        }

        $send('AUTH LOGIN');
        if (!$expect($read(), '334')) {
            return false;
        }
        $send(base64_encode($config['smtp_user']));
        if (!$expect($read(), '334')) {
            return false;
        }
        $send(base64_encode($config['smtp_pass']));
        if (!$expect($read(), '235')) {
            return false;
        }

        $send('MAIL FROM:<' . $from . '>');
        if (!$expect($read(), '250')) {
            return false;
        }
        $send('RCPT TO:<' . $to . '>');
        if (!$expect($read(), '250')) {
            return false;
        }
        $send('DATA');
        if (!$expect($read(), '354')) {
            return false;
        }

        $message = implode("\r\n", array_merge(
            $headers,
            ['To: ' . $to, 'Subject: ' . $subject, 'Date: ' . date('r')]
        )) . "\r\n\r\n" . str_replace("\n", "\r\n", $body);
        // Dot-stuffing so a line that is just "." can't end the message early.
        $message = preg_replace('/^\./m', '..', $message);
        fwrite($socket, $message . "\r\n.\r\n");
        $ok = $expect($read(), '250');

        $send('QUIT');
        return $ok;
    } finally {
        fclose($socket);
    }
}
