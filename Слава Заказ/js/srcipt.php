<?php
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-6.8.0/autoload.php';
require 'PHPMailer-6.8.0/src/Exception.php';
require 'PHPMailer-6.8.0/src/PHPMailer.php';
require 'PHPMailer-6.8.0/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true; 
$mail->Username = 'dmitryp1771@gmail.com';                     
$mail->Password = '89119387037';                               
$mail->SMTPSecure = 'ssl';            
$mail->Port = 465;             
$mail->Charset = 'utf-8';
$mail->setLanguage('ru','PHPMailer-6.8.0/language/');
$mail->IsHTML(true);

$mail->setForm('dmitryp1771@gmail.com');
$mail->addAddress('jifil85588@saeoil.com');
$mail->Subject = 'Книга ёбаная';

$body = '<h1>Я устал делать этот заказ</h1>';
    $name.='<p>Имя: '.$_POST['name'].'</p>';
    $phone.='<p>Номер телефона: '.$_POST['phone'].'</p>';
    $date.='<p>Желаемая дата: '.$_POST['date'].'</p>';
    $time.='<p>Желаемое время: '.$_POST['time'].'</p>';

$mail->Body = .$body .$name .$phone .$date .$time;
$mail->AltBody = '';

if(!$mail->send())
{
    $message = 'Ошибка';
}
else
{
    $message = 'Сообщение отправлено';
}

$response = ['message' => $message];
header('Content-type: application/json');
echo json_encode($response);
?>