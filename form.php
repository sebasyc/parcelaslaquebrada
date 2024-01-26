<?php

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje .= "Su email es: " . $email . "\r\n";
$mensaje .= "Mensaje " . $_POST['mensaje'] . "\r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'sebayc.s@gmail.com';
$asunto =  'Mensaje de Parcelas la Quebrada';

mail($para, $asunto, utf8_decode($mensaje), $header);

header('Location:exito.html');

?>