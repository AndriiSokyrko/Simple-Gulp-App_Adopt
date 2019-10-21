<?php

//$name = $_POST['myInput'];
if (  !isset($_POST['user_phone']) || empty($_POST['user_phone']) )
   die();
//    header("location: http://localhost:3000"); ;
$phone = $_POST['user_phone'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.rambler.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'yorname@rambler.ru';                 // Наш логин
$mail->Password = '11111111111';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom('yorname@rambler.ru', 'John Doe');   // От кого письмо
$mail->addAddress('yorname@rambler.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Это тема сообщения';
$mail->Body    = '
	Пользователь оставил свои данные <br> 
	Имя: ' . $name . ' <br>
	Телефон: ' . $phone . '';
$mail->AltBody = 'Это альтернативный текст';

if(!$mail->Send()){
    echo "Ошибка отправки письма: " . $mail->ErrorInfo;
}else{

    echo "Письмо отправленно!";

//    header("location: http://localhost:3000");
}
?>
