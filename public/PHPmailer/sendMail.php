<?php

if(!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)){
    echo '<script type="text/javascript">
        alert("Por favor ingrese una dirección válida");
        window.history.go(-1);
        </script>';;
    die();
    }

$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

$body = "Nombre: " . $name ."<br>Correo: " . $email . "<br>Mensaje: " . $message;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';


//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\SMTP;
// use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
// require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                                       //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'mail.solucionescontablessd.com';       //Set the SMTP server to send through
    $mail->SMTPAuth   = false;                                  //Enable SMTP authentication
    $mail->Username   = 'mailer@solucionescontablessd.com';     //SMTP username
    $mail->Password   = 'Vs;Vup!!#Zq&!';                        //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('mailer@solucionescontablessd.com', 'SolucionesContablesSD');
    $mail->addAddress('jncostamagna@gmail.com');     //Add a recipient
    $mail->addAddress('solucssd@solucionescontablessd.com');               //Name is optional
    $mail->addAddress('solucionescontablessandiego@gmail.com');               //Name is optional
    $mail->addReplyTo('solucssd@solucionescontablessd.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Mensaje de '. $name . ' desde www.solucionescontablessd.com';
    $mail->Body    = $body;
    $mail->AltBody = $body;

    $mail->send();
    echo '<script type="text/javascript">
            alert("Mensaje enviado correctamente");
            window.history.go(-1);
        </script>';
} catch (Exception $e) {
    echo '<script type="text/javascript">
            alert("Something went wrong: '.$mail->ErrorInfo.'");
            window.history.go(-1);
        </script>';
}