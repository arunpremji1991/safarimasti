<?php
// Copy this file to config.php (same folder, on the server) and fill it in.
// config.php is blocked from web access by .htaccess and is never committed to Git.
//
// Recommended: create a mailbox such as info@safarimasti.com in hPanel -> Emails,
// then use its SMTP details below. This gives the best inbox delivery.
// If smtp_* are left empty, PHP's built-in mail() is used instead.
return [
    'to'        => 'safarimasti@gmail.com',      // where enquiries are delivered
    'from'      => 'info@safarimasti.com',       // must be a mailbox on your own domain
    'smtp_host' => 'smtp.hostinger.com',
    'smtp_port' => 465,                          // 465 = SSL, 587 = STARTTLS
    'smtp_user' => 'info@safarimasti.com',
    'smtp_pass' => 'CHANGE-ME',
];
