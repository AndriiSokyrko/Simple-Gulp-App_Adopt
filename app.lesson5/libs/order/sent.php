<!DOCTYPE html>
<html lang="ru">
<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta charset="UTF-8">
		<meta name="format-detection" content="telephone=no">
		<meta name="viewport" content="width=960px">
		<title>Отправлено</title>
		<link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico">
		<link rel="stylesheet" href="css/fonts.css">
		<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<div id="order">
		<div>
			<h5>Спасибо, что оформили заказ</h5>
			<p>Наш менеджер свяжется с вами в течение 1 рабочего часа</p>
			<a href="../index.php">Вернуться на сайт</a>
		</div>
	</div>
</body>
</html>
<?php
	if (isset($_POST["send_dzv"])) {
		$message = "Перезвоните мне<br />
			Имя: ".$_POST["name"]."<br />
			Телефон: ".$_POST["phone"]."<br />
			Отправлено с: ".$_SERVER["SCRIPT_URI"];
		$to = "89292767986@yandex.ru";
		$from = "Перезвоните мне";
		$subject = "Перезвоните мне";
		$subject = "=?utf-8?B?".base64_encode($subject)."?=";
		$headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html; charset=utf-8\r\n";
		mail ($to, $subject, $message, $headers);
	}
	if (isset($_POST["send_footer"])) {
		$message = "Заполненная форма - свяжитесь с нами<br />
			Имя: ".$_POST["name"]."<br />
			Телефон: ".$_POST["phone"]."<br />
			Email: ".$_POST["email"]."<br />
			Сообщение: ".$_POST["date"]."<br />
			Отправлено с: ".$_SERVER["SCRIPT_URI"];
		$to = "89292767986@yandex.ru";
		$from = "Заказ";
		$subject = "Заказ";
		$subject = "=?utf-8?B?".base64_encode($subject)."?=";
		$headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html; charset=utf-8\r\n";
		mail ($to, $subject, $message, $headers);
	}
	if (isset($_POST["send_1"])) {
		$message = "Заказ - стол визажиста<br />
			Имя: ".$_POST["name"]."<br />
			Телефон: ".$_POST["phone"]."<br />
			Email: ".$_POST["email"]."<br />
			Сообщение: ".$_POST["date"]."<br />
			Отправлено с: ".$_SERVER["SCRIPT_URI"];
		$to = "89292767986@yandex.ru";
		$from = "Заказ";
		$subject = "Заказ";
		$subject = "=?utf-8?B?".base64_encode($subject)."?=";
		$headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html; charset=utf-8\r\n";
		mail ($to, $subject, $message, $headers);
	}
	if (isset($_POST["send_2"])) {
		$message = "Заказ - комплект №777<br />
			Имя: ".$_POST["name"]."<br />
			Телефон: ".$_POST["phone"]."<br />
			Email: ".$_POST["email"]."<br />
			Сообщение: ".$_POST["date"]."<br />
			Отправлено с: ".$_SERVER["SCRIPT_URI"];
		$to = "89292767986@yandex.ru";
		$from = "Заказ";
		$subject = "Заказ";
		$subject = "=?utf-8?B?".base64_encode($subject)."?=";
		$headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html; charset=utf-8\r\n";
		mail ($to, $subject, $message, $headers);
	}
	if (isset($_POST["send_3"])) {
		$message = "Заказ - столик стилиста<br />
			Имя: ".$_POST["name"]."<br />
			Телефон: ".$_POST["phone"]."<br />
			Email: ".$_POST["email"]."<br />
			Сообщение: ".$_POST["date"]."<br />
			Отправлено с: ".$_SERVER["SCRIPT_URI"];
		$to = "89292767986@yandex.ru";
		$from = "Заказ";
		$subject = "Заказ";
		$subject = "=?utf-8?B?".base64_encode($subject)."?=";
		$headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html; charset=utf-8\r\n";
		mail ($to, $subject, $message, $headers);
	}
	if (isset($_POST["send_4"])) {
		$message = "Заказ - стул визажиста<br />
			Имя: ".$_POST["name"]."<br />
			Телефон: ".$_POST["phone"]."<br />
			Email: ".$_POST["email"]."<br />
			Сообщение: ".$_POST["date"]."<br />
			Отправлено с: ".$_SERVER["SCRIPT_URI"];
		$to = "89292767986@yandex.ru";
		$from = "Заказ";
		$subject = "Заказ";
		$subject = "=?utf-8?B?".base64_encode($subject)."?=";
		$headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html; charset=utf-8\r\n";
		mail ($to, $subject, $message, $headers);
	}
	if (isset($_POST["send_5"])) {
		$message = "Заказ - дамский столик<br />
			Имя: ".$_POST["name"]."<br />
			Телефон: ".$_POST["phone"]."<br />
			Email: ".$_POST["email"]."<br />
			Сообщение: ".$_POST["date"]."<br />
			Отправлено с: ".$_SERVER["SCRIPT_URI"];
		$to = "89292767986@yandex.ru";
		$from = "Заказ";
		$subject = "Заказ";
		$subject = "=?utf-8?B?".base64_encode($subject)."?=";
		$headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html; charset=utf-8\r\n";
		mail ($to, $subject, $message, $headers);
	}
	if (isset($_POST["send_6"])) {
		$message = "Заказ - стол визажиста<br />
			Имя: ".$_POST["name"]."<br />
			Телефон: ".$_POST["phone"]."<br />
			Email: ".$_POST["email"]."<br />
			Сообщение: ".$_POST["date"]."<br />
			Отправлено с: ".$_SERVER["SCRIPT_URI"];
		$to = "89292767986@yandex.ru";
		$from = "Заказ";
		$subject = "Заказ";
		$subject = "=?utf-8?B?".base64_encode($subject)."?=";
		$headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html; charset=utf-8\r\n";
		mail ($to, $subject, $message, $headers);
	}
	if (isset($_POST["send_7"])) {
		$message = "Заказ - стол для макияжа 80*50<br />
			Имя: ".$_POST["name"]."<br />
			Телефон: ".$_POST["phone"]."<br />
			Email: ".$_POST["email"]."<br />
			Сообщение: ".$_POST["date"]."<br />
			Отправлено с: ".$_SERVER["SCRIPT_URI"];
		$to = "89292767986@yandex.ru";
		$from = "Заказ";
		$subject = "Заказ";
		$subject = "=?utf-8?B?".base64_encode($subject)."?=";
		$headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html; charset=utf-8\r\n";
		mail ($to, $subject, $message, $headers);
	}
	if (isset($_POST["send_8"])) {
		$message = "Заказ - комплект 19<br />
			Имя: ".$_POST["name"]."<br />
			Телефон: ".$_POST["phone"]."<br />
			Email: ".$_POST["email"]."<br />
			Сообщение: ".$_POST["date"]."<br />
			Отправлено с: ".$_SERVER["SCRIPT_URI"];
		$to = "89292767986@yandex.ru";
		$from = "Заказ";
		$subject = "Заказ";
		$subject = "=?utf-8?B?".base64_encode($subject)."?=";
		$headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html; charset=utf-8\r\n";
		mail ($to, $subject, $message, $headers);
	}
	if (isset($_POST["send_9"])) {
		$message = "Заказ - стол МИСТЕР БЕЛЫЙ<br />
			Имя: ".$_POST["name"]."<br />
			Телефон: ".$_POST["phone"]."<br />
			Email: ".$_POST["email"]."<br />
			Сообщение: ".$_POST["date"]."<br />
			Отправлено с: ".$_SERVER["SCRIPT_URI"];
		$to = "89292767986@yandex.ru";
		$from = "Заказ";
		$subject = "Заказ";
		$subject = "=?utf-8?B?".base64_encode($subject)."?=";
		$headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html; charset=utf-8\r\n";
		mail ($to, $subject, $message, $headers);
	}
	if (isset($_POST["send_10"])) {
		$message = "Заказ - гримерный столик<br />
			Имя: ".$_POST["name"]."<br />
			Телефон: ".$_POST["phone"]."<br />
			Email: ".$_POST["email"]."<br />
			Сообщение: ".$_POST["date"]."<br />
			Отправлено с: ".$_SERVER["SCRIPT_URI"];
		$to = "89292767986@yandex.ru";
		$from = "Заказ";
		$subject = "Заказ";
		$subject = "=?utf-8?B?".base64_encode($subject)."?=";
		$headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html; charset=utf-8\r\n";
		mail ($to, $subject, $message, $headers);
	}
	if (isset($_POST["send_11"])) {
		$message = "Заказ - комплект 23<br />
			Имя: ".$_POST["name"]."<br />
			Телефон: ".$_POST["phone"]."<br />
			Email: ".$_POST["email"]."<br />
			Сообщение: ".$_POST["date"]."<br />
			Отправлено с: ".$_SERVER["SCRIPT_URI"];
		$to = "89292767986@yandex.ru";
		$from = "Заказ";
		$subject = "Заказ";
		$subject = "=?utf-8?B?".base64_encode($subject)."?=";
		$headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html; charset=utf-8\r\n";
		mail ($to, $subject, $message, $headers);
	}
	if (isset($_POST["send_12"])) {
		$message = "Заказ - зеркало с подстветкой<br />
			Имя: ".$_POST["name"]."<br />
			Телефон: ".$_POST["phone"]."<br />
			Email: ".$_POST["email"]."<br />
			Сообщение: ".$_POST["date"]."<br />
			Отправлено с: ".$_SERVER["SCRIPT_URI"];
		$to = "89292767986@yandex.ru";
		$from = "Заказ";
		$subject = "Заказ";
		$subject = "=?utf-8?B?".base64_encode($subject)."?=";
		$headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html; charset=utf-8\r\n";
		mail ($to, $subject, $message, $headers);
	}
	if (isset($_POST["send_13"])) {
		$message = "Заказ - гримерный столик<br />
			Имя: ".$_POST["name"]."<br />
			Телефон: ".$_POST["phone"]."<br />
			Email: ".$_POST["email"]."<br />
			Сообщение: ".$_POST["date"]."<br />
			Отправлено с: ".$_SERVER["SCRIPT_URI"];
		$to = "89292767986@yandex.ru";
		$from = "Заказ";
		$subject = "Заказ";
		$subject = "=?utf-8?B?".base64_encode($subject)."?=";
		$headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html; charset=utf-8\r\n";
		mail ($to, $subject, $message, $headers);
	}
	if (isset($_POST["send_14"])) {
		$message = "Заказ - стол визажиста Крем<br />
			Имя: ".$_POST["name"]."<br />
			Телефон: ".$_POST["phone"]."<br />
			Email: ".$_POST["email"]."<br />
			Сообщение: ".$_POST["date"]."<br />
			Отправлено с: ".$_SERVER["SCRIPT_URI"];
		$to = "89292767986@yandex.ru";
		$from = "Заказ";
		$subject = "Заказ";
		$subject = "=?utf-8?B?".base64_encode($subject)."?=";
		$headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html; charset=utf-8\r\n";
		mail ($to, $subject, $message, $headers);
	}
	if (isset($_POST["send_15"])) {
		$message = "Заказ - дамский столик<br />
			Имя: ".$_POST["name"]."<br />
			Телефон: ".$_POST["phone"]."<br />
			Email: ".$_POST["email"]."<br />
			Сообщение: ".$_POST["date"]."<br />
			Отправлено с: ".$_SERVER["SCRIPT_URI"];
		$to = "89292767986@yandex.ru";
		$from = "Заказ";
		$subject = "Заказ";
		$subject = "=?utf-8?B?".base64_encode($subject)."?=";
		$headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html; charset=utf-8\r\n";
		mail ($to, $subject, $message, $headers);
	}
	if (isset($_POST["send_16"])) {
		$message = "Заказ - макияжный столик<br />
			Имя: ".$_POST["name"]."<br />
			Телефон: ".$_POST["phone"]."<br />
			Email: ".$_POST["email"]."<br />
			Сообщение: ".$_POST["date"]."<br />
			Отправлено с: ".$_SERVER["SCRIPT_URI"];
		$to = "89292767986@yandex.ru";
		$from = "Заказ";
		$subject = "Заказ";
		$subject = "=?utf-8?B?".base64_encode($subject)."?=";
		$headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html; charset=utf-8\r\n";
		mail ($to, $subject, $message, $headers);
	}
?>
