<?php
$client = new SoapClient(null, array(
      'location' => "http://pascal.fis.agh.edu.pl/~9wajda/cgi-bin/soap/Serwer_3.cgi",
      'uri'      => "//pascal.fis.agh.edu.pl/SoapServer",
      'soap_version' => SOAP_1_1 ,
      'trace'    => 0 ));
  
   $add = $client->__soapCall("add",array(24, 6));
   echo("<br/>Returning value of add() call: ".$add);
  
   $subtract = $client->__soapCall("subtract",array(24, 6));
   echo("<br/>Returning value of subtract() call: ".$subtract);
   
   $multiply = $client->__soapCall("multiply",array(24, 6));
   echo("<br/>Returning value of multiply() call: ".$multiply);
   
   $divide = $client->__soapCall("divide",array(24, 6));
   echo("<br/>Returning value of divide() call: ".$divide);
   /*
   echo("\nReturning value of add() call: ". $client->__soapCall("add",array(24, 6))."\n");
   echo("\nReturning value of subtract() call: ".$client->__soapCall("subtract",array(24, 6))."\n");
   echo("\nReturning value of multiply() call:  ".$client->__soapCall("multiply",array(24, 6))."\n");
   echo("\nReturning value of divide() call: ".$client->__soapCall("divide",array(24, 6))."\n");
   */
?>