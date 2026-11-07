<?php
require __DIR__ . '/_lib.php';

$d = read_json_body();

$fullName = clean_line($d['fullName'] ?? '', 200);
$email = clean_line($d['email'] ?? '', 320);

if ($fullName === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['error' => 'Please check the form and try again.']);
}

$tourTitle = clean_line($d['tourTitle'] ?? '', 200);
$phone = clean_line($d['phone'] ?? '', 50);
$country = clean_line($d['country'] ?? '', 100);
$preferredContact = clean_line($d['preferredContact'] ?? '', 50);
$journeyTypes = clean_list($d['journeyTypes'] ?? []);
$regions = clean_list($d['regions'] ?? [], 20);
$customDestination = clean_line($d['customDestination'] ?? '', 500);
$startDate = clean_line($d['startDate'] ?? '', 20);
$endDate = clean_line($d['endDate'] ?? '', 20);
$flexible = !empty($d['flexibleDates']);
$duration = clean_line($d['duration'] ?? '', 50);
$adults = clean_int($d['adults'] ?? 1, 50);
$children = clean_int($d['children'] ?? 0, 50);
$infants = clean_int($d['infants'] ?? 0, 50);
$childAges = clean_line($d['childAges'] ?? '', 200);
$travelStyle = clean_line($d['travelStyle'] ?? '', 50);
$groupPreference = clean_line($d['groupPreference'] ?? '', 50);
$interests = clean_list($d['interests'] ?? []);
$special = clean_text($d['specialRequirements'] ?? '', 4000);

$dash = '—';
$lines = array_filter([
    'New Custom Journey Request — Safari Masti',
    '',
    'Submitted: ' . gmdate('c'),
    $tourTitle !== '' ? 'Selected Journey: ' . $tourTitle : null,
    '',
    '--- Traveler ---',
    'Name: ' . $fullName,
    'Email: ' . $email,
    $phone !== '' ? 'Phone/WhatsApp: ' . $phone : null,
    $country !== '' ? 'Country: ' . $country : null,
    $preferredContact !== '' ? 'Preferred Contact: ' . $preferredContact : null,
    '',
    '--- Journey ---',
    'Travel Type: ' . ($journeyTypes !== '' ? $journeyTypes : $dash),
    'Destination(s): ' . ($regions !== '' ? $regions : $dash),
    $customDestination !== '' ? 'Destination in mind: ' . $customDestination : null,
    'Dates: ' . ($startDate !== '' ? $startDate : $dash) . ' to ' . ($endDate !== '' ? $endDate : $dash) . ($flexible ? ' (flexible)' : ''),
    $duration !== '' ? 'Approximate Duration: ' . $duration : null,
    "Adults: $adults, Children: $children, Infants: $infants",
    $childAges !== '' ? 'Child Ages: ' . $childAges : null,
    $travelStyle !== '' ? 'Travel Style: ' . $travelStyle : null,
    $groupPreference !== '' ? 'Group Preference: ' . $groupPreference : null,
    'Interests: ' . ($interests !== '' ? $interests : $dash),
    '',
    '--- Special Requirements ---',
    $special !== '' ? $special : $dash,
], fn ($line) => $line !== null);

if (!send_enquiry('New Custom Journey Request — Safari Masti', implode("\n", $lines), $email)) {
    respond(500, ['error' => "We couldn't send your request right now. Please call or WhatsApp us instead."]);
}

respond(200, ['ok' => true]);
