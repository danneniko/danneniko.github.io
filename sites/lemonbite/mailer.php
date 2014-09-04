<?php

$i18n = array(
	// English
	"en" => array(
		"badpost" => "Error in web page",
		"bademail" => "E-Mail address is not valid",
		"mailerror" => "There was a problem sending the E-Mail (please try again)"
	),
	// Swedish
	"sv" => array(
		"badpost" => "Fel i webbsidan",
		"bademail" => "E-mailadressen är inte giltig",
		"mailerror" => "E-mailadressen är tyvärr inte giltig (vänligen ange korrekt e-mailadress)"
	)
);

$problems = array();

function add_problem($key)
{
	global $problems, $i18n, $lang;
	$problems[$key] = $i18n[$lang][$key];
}

$lang = 'sv';
if (isset($_POST['lang'])) {
	$lang = $_POST['lang'];
}

$ok = isset($_POST['submit']);

// $jsclient is true of the client is "smart" javascript code that
// accepts json response instead of redirect/500 error
$jsclient = $_POST['jsclient'];

if (!$ok) {
	add_problem('badpost');
}

if ($ok) {
	$to = "info@lemonbite.se";
	$subject = "Contact form";
	
	// data the visitor provided
	$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
	$company = filter_var($_POST['company'], FILTER_SANITIZE_STRING);
	$phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
	$email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
	$message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
	
	//constructing the message
	$body = " From: $name\n\n Company: $company\n\n Phone:$phone\n\n E-Mail:$email\n\n Message:\n\n $message";
	
	$ok = ($email !== FALSE);
	
	if (!$ok) {
		add_problem('bademail');
	}
}

if ($ok) {
	// ...and away we go!
	$ok = mail($to, $subject, $body, "From: " + $email);
	
	if (!$ok) {
		add_problem('mailerror');
	}
}

if ($jsclient) {
	echo json_encode(array('ok' => $ok, 'problems' => $problems));
} else {
	if ($ok) {
		// redirect to confirmation
		header('Location: confirmation.htm');
	} else {
		// handle the error somehow
		header($_SERVER['SERVER_PROTOCOL'] . " 500 Internal Server Error (" . join(", ", array_keys($problems)) . ")", true, 500);
	}
}

?>
