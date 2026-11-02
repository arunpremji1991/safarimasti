<?php
require __DIR__ . '/_lib.php';

$d = read_json_body();

$name = clean_line($d['name'] ?? '', 200);
$email = clean_line($d['email'] ?? '', 320);
$phone = clean_line($d['phone'] ?? '', 50);

if ($name === '' || $phone === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['error' => 'Please check the form and try again.']);
}

$mode = ($d['mode'] ?? '') === 'customize' ? 'Customization request' : 'Booking request';
$tourTitle = clean_line($d['tourTitle'] ?? '', 200);
$pageUrl = clean_line($d['pageUrl'] ?? '', 500);
$packageOption = clean_line($d['packageOption'] ?? '', 300);
$travelDate = clean_line($d['travelDate'] ?? '', 20);
$adults = clean_int($d['adults'] ?? 1, 50);
$children = clean_int($d['children'] ?? 0, 50);
$departure = clean_line($d['departureCity'] ?? '', 200);
$changes = clean_list($d['changes'] ?? []);
$notes = clean_text($d['notes'] ?? '', 4000);

$dash = '—';
$lines = array_filter([
    'New ' . $mode . ' — Safari Masti website',
    '',
    'Submitted: ' . gmdate('c'),
    '',
    '--- Journey ---',
    'Journey: ' . ($tourTitle !== '' ? $tourTitle : $dash),
    $pageUrl !== '' ? 'Page: ' . $pageUrl : null,
    $packageOption !== '' ? 'Selected option: ' . $packageOption : null,
    'Preferred travel date: ' . ($travelDate !== '' ? $travelDate : $dash),
    "Adults: $adults, Children: $children",
    $departure !== '' ? 'Travelling from: ' . $departure : null,
    $changes !== '' ? 'Wants to change: ' . $changes : null,
    '',
    '--- Traveler ---',
    'Name: ' . $name,
    'Email: ' . $email,
    'Phone/WhatsApp: ' . $phone,
    '',
    '--- Notes ---',
    $notes !== '' ? $notes : $dash,
], fn ($line) => $line !== null);

$subject = 'New ' . $mode . ($tourTitle !== '' ? ' — ' . $tourTitle : '') . ' — Safari Masti';

if (!send_enquiry($subject, implode("\n", $lines), $email)) {
    respond(500, ['error' => "We couldn't send your request right now. Please call or WhatsApp us instead."]);
}

respond(200, ['ok' => true]);
