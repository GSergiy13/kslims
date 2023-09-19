<?php
// Define constants
define( "RECIPIENT_NAME", "Lala-stars.com" );
define( "RECIPIENT_EMAIL", "frodo13lot@gmail.com" );
define( "EMAIL_SUBJECT", "[Lala-stars.com]" );

$sender_message = $_POST['user_message'];
$sender_email = $_POST['user_email'];
$sender_name = $_POST['user_name'];

$message = "
	<html>
		<body>
			<p>Почта: <strong>$sender_email</strong></p>
			<p>Имя: <strong>$sender_name</strong></p>
			<p>Сообщение: <span style=\"font-size:20px\">$sender_message</span></p>
        </body>
	</html>
";

$response = array(); 

if ($sender_name) {
    $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
    $headers = "Content-type: text/html; charset = utf-8 \r\n";
    $headers .= "From: " . $sender_name . " <" . $sender_email . ">";
    $success = mail($recipient, EMAIL_SUBJECT, $message, $headers);

    if ($success) {
        $response['status'] = 'success';
        $response['message'] = 'Thank you for your message!';
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Error while sending, please try again';
    }
} else {
    $response['status'] = 'error';
    $response['message'] = 'Name is required';
}

header('Content-Type: application/json');
echo json_encode($response);
?>