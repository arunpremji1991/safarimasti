<?php
// Copy this file to config.php (same folder, on the server) and fill in the password.
// config.php is blocked from web access by .htaccess and is never committed to Git.
//
// Sends through the Safari Masti Gmail account using a Google App Password
// (Google Account -> Security -> 2-Step Verification -> App passwords).
// Use the 16-character App Password, NOT the normal Gmail password.
//
// Alternative: a mailbox on your own domain (e.g. info@safarimasti.com) —
// set smtp_host to smtp.hostinger.com and use that mailbox's address and password.
return [
    'to'        => 'safarimasti@gmail.com',   // where enquiries are delivered
    'from'      => 'safarimasti@gmail.com',   // must match smtp_user for Gmail
    'smtp_host' => 'smtp.gmail.com',
    'smtp_port' => 465,                       // 465 = SSL, 587 = STARTTLS
    'smtp_user' => 'safarimasti@gmail.com',
    'smtp_pass' => 'PASTE-16-CHARACTER-APP-PASSWORD-HERE',
];
