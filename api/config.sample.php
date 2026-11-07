<?php
// Copy this file to config.php (same folder, on the server) and fill in the password.
// config.php is blocked from web access by .htaccess and is never committed to Git.
//
// Sends through the business mailbox bookings@safarimasti.com on Hostinger
// (hPanel -> Emails). Use that mailbox's own password.
//
// Alternative: a Gmail account with an App Password — set smtp_host to
// smtp.gmail.com and use the Gmail address plus the 16-character App Password.
return [
    'to'        => 'bookings@safarimasti.com',   // where enquiries are delivered
    'from'      => 'bookings@safarimasti.com',   // must match smtp_user
    'smtp_host' => 'smtp.hostinger.com',
    'smtp_port' => 465,                          // 465 = SSL, 587 = STARTTLS
    'smtp_user' => 'bookings@safarimasti.com',
    'smtp_pass' => 'PASTE-MAILBOX-PASSWORD-HERE',
];
