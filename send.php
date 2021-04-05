<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$mail = $_POST['mail'];
$comment = $_POST['comment'];

// Формирование самого письма
$title = "Новое обращение Ehya - blog";
$body = "
<h2>Новое письмо</h2>
<b>Email:</b><br> $mail
";
$commentBody = "
<h2>Новое письмо</h2>
<b>Comment:</b><br> $comment
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'mail.iljalobossok.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'ehya@iljalobossok.ru'; // Логин на почте
    $mail->Password   = 'P8k5R9s4'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->SMTPAutoTLS = false;
    $mail->SMTPSecure = false;
    $mail->Port       = 25;
    $mail->setFrom('ehya@iljalobossok.ru', 'Ilja Lobossok'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('iljalobossok@gmail.com');

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;\
    if (empty($mail)){
        $mail->Body = $body;
    } else{
        $mail->Body = $commentBody;
    }
    
    
    
    // Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";} 
    else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата

if (empty($mail)){
        header('Location: thankyou.html');
    } else{
        header('Location: detail.html');
    }