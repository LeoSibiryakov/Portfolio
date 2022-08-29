<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'PHPMailer/language/');
    $mail->IsHTML(true);
    $mail->setFrom('info@fls.guru', 'Leo');
    $mail->addAddress('leo-sibiryakov@yandex.ru');
    $mail->Subject = 'Привет';
    $body = '<h1>HELLO!</h1>';
    $mail->Body = $body;
    if (!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены';
    }
    $response = ['message' => $message];
    header('Content-type: application/json');
    echo json_encode($response);
?>