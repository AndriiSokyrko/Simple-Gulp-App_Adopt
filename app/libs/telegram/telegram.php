<?php
//https://api.telegram.org/bot<YourBOTToken>/getUpdates
//$name = $_POST['myInput'];
if (  !isset($_POST['user_phone']) || empty($_POST['user_phone']) )
    die();
//    header("location: http://localhost:3000"); ;
$phone = $_POST['user_phone'];
$token = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
//$url_chat = "https://api.telegram.org/bot{token}/getUpdates";
$url_chat = "https://api.telegram.org/bot".$token;
$id_chat="xxxxxxxx";
$data=[
  'phone'=>$phone,
   'token'=>$token
];

$url =http_build_query($data) ;
$sendToTelegran = fopen("{$url_chat}/sendMessage?chat_id={$id_chat}
$parse_mode = html&text={$phone}","r" );

if ($sendToTelegran){
    echo "MEssage success sended";

}
else {
    echo "Erro message";
//    header('location: localhost:3000');
}
