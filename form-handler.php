<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Send email (modify this according to your needs)
    $to = "amilulu.banu@example.com";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);

    // Optionally, you can redirect the user after form submission
    header("Location: contact.html");
    exit();
}
?>
