<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $contactNo = $_POST["contactNo"];
    $message = $_POST["message"];

    // Recipient email address (replace with your email)
    $to = "dandan5309@gmail.com";

    // Subject
    $subject = "New Contact Form Submission";

    // Message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Contact No: $contactNo\n\n";
    $email_message .= "Message:\n$message";

    // Additional headers
    $headers = "From: $email";

    // Send email
    mail($to, $subject, $email_message, $headers);
}
?>
