<?php
require __DIR__ . '/_lib.php';

$data = read_json_body();

$name = clean_line($data['name'] ?? '', 200);
$email = clean_line($data['email'] ?? '', 320);
$phone = clean_line($data['phone'] ?? '', 50);
$message = clean_text($data['message'] ?? '', 4000);

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['error' => 'Please check the form and try again.']);
}

$lines = [
    'New contact enquiry — Safari Masti website',
    '',
    'Name: ' . $name,
    'Email: ' . $email,
];
if ($phone !== '') {
    $lines[] = 'Phone: ' . $phone;
}
array_push($lines, '', 'Message:', $message, '', 'Submitted: ' . gmdate('c'));

if (!send_enquiry('New Contact Enquiry — Safari Masti', implode("\n", $lines), $email)) {
    respond(500, ['error' => "We couldn't send your message right now. Please call or WhatsApp us instead."]);
}

respond(200, ['ok' => true]);
