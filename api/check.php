<?php
// Diagnostic only: reports whether form email is configured and whether the SMTP login works.
// It sends no email and never shows the password. Delete this file once everything works.
require __DIR__ . '/_lib.php';

$smtpConfigured = !empty($config['smtp_host']) && !empty($config['smtp_user']) && !empty($config['smtp_pass']);

$report = [
    'config_php_found' => is_file(__DIR__ . '/config.php'),
    'config_sample_still_has_placeholder_password' => isset($config['smtp_pass']) && stripos((string) $config['smtp_pass'], 'PASTE') !== false,
    'smtp_configured' => $smtpConfigured,
    'smtp_host' => $config['smtp_host'] ?? null,
    'smtp_port' => $config['smtp_port'] ?? null,
    'delivers_to' => $config['to'] ?? 'safarimasti@gmail.com (default)',
    'php_mail_function_available' => function_exists('mail'),
    'leads_backup_in_folder_above_public_html' => is_dir(dirname(__DIR__, 2)) && is_writable(dirname(__DIR__, 2)),
];

if ($smtpConfigured) {
    $socket = smtp_open($config);
    if ($socket) {
        fwrite($socket, "QUIT\r\n");
        fclose($socket);
        $report['smtp_login'] = 'OK - the server accepted the username and password';
    } else {
        $report['smtp_login'] = 'FAILED';
        $report['smtp_problem'] = smtp_error();
    }
} else {
    $report['smtp_login'] = 'NOT TESTED - config.php is missing or has no smtp settings, so the form falls back to PHP mail(), which Gmail often drops';
}

echo json_encode($report, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
