<?php
if ($_POST["nombre"] == "") {
header("Location: Contacto.html");
}
else {
$email_message = "Information Receieved:\n\n";
$email_message .= "Name: " . $_POST["Name"] . "\n";
$email_message .= "E-Mail: " . $_POST["Email"] . "\n";
$email_message .= "Message: " . $_POST["Message"] . "\n";
	include("class.phpmailer.php");
	$mail = new phpmailer();
	$mail->Mailer = "smtp";
	$mail->Host = "mail.getmighty.net";
	$mail->SMTPAuth = true;
	$mail->Username = "contact@getmighty.net";
	$mail->Password = "supersecurepasswordforcontact";
	$mail->From = "contact@getmighty.net";
	$mail->FromName = "Portfolio contact form";
	$mail->AddAddress("contact@getmighty.net");
	$mail->Subject = "Contact form";
	$mail->Body = $email_message;
$mail->Send();
}
?>
<html>
<head>
	<title>Nick Ferrer</title>
	<style>
	.centrar
	{
		position: absolute;
		/*nos posicionamos en el centro del navegador*/
		top:50%;
		left:50%;
		/*determinamos una anchura*/
		width:400px;
		/*indicamos que el margen izquierdo, es la mitad de la anchura*/
		margin-left:-200px;
		/*determinamos una altura*/
		height:300px;
		/*indicamos que el margen superior, es la mitad de la altura*/
		margin-top:-150px;
		/*border:1px solid #808080;*/
		padding:5px;		
	}
	</style>
</head>
 
<body style='background-color:black;'>
<div class='centrar'>
		<p><span style="color:white; font-size:25px; font-family: 'Century Gothic';">Message sent successfully!</span></p>
    <p><span style="color:white;font-size:18px;"><a href="javascript:history.back()" style="text-decoration:none; color:white; font-family: 'Century Gothic';"><-volver</a></span></p>
	</div>
</body>
</html>