<?php
$debug  = 1;
$client = new SoapClient(null, array(
  'location' => "http://pascal.fis.agh.edu.pl/~9wajda/soap/Serwer_w_php.php",
  'uri'      => "http://pascal.fis.agh.edu.pl/Demo",
  'soap_version' => SOAP_1_2,
  'trace'    => $debug ));
if ( $debug == 1 ) {
	echo("Returning value of add() call: ".$client->__soapCall("add", array(24, 6))."\n");
	echo("Returning value of subtract() call: ".$client->__soapCall("subtract", array(24, 6))."\n");
	echo("Returning value of multiply() call: ".$client->__soapCall("multiply", array(24, 6))."\n");
	echo("Returning value of divide() call: ".$client->__soapCall("divide", array(24, 6))."\n");
}

?>