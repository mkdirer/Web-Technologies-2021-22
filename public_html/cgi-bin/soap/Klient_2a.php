<?php
$client = new SoapClient(null, array(
      'location' => "http://pascal.fis.agh.edu.pl/~9wajda/cgi-bin/soap/Serwer_2.cgi",
      'uri'      => "//pascal.fis.agh.edu.pl/Demo",
      'soap_version' => SOAP_1_1 ,
      'trace'    => 1 ));
  
   $return = $client->__soapCall("hi",array(""));
   echo("\nReturning value of __soapCall() call: ".$return);
  
   echo("\nDumping request headers:\n"
      .$client->__getLastRequestHeaders());
  
   echo("\nDumping request:\n".$client->__getLastRequest());
  
   echo("\nDumping response headers:\n"
      .$client->__getLastResponseHeaders());
  
   echo("\nDumping response:\n".$client->__getLastResponse());
  
?>