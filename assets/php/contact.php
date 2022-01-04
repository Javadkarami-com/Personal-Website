<?php 
if(isset($_REQUEST['submit'])) {
$name = $_REQUEST['name']; //
//$subject = $_REQUEST['subject']; //
$email = $_REQUEST['email']; //
$message = $_REQUEST['message'];
$subject = 'Message from website';//. $subject;
$to = 'javadfrt@gmail.com'; // change email

     $headers="From: {$email}\r\nReply-To: {$email}";
    mail($to,$subject,$message,$headers);
    $success = "Thank you! You're email has been sent.";
 //echo $headers;
}
?>