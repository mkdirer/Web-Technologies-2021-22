#!/usr/bin/perl
  use strict;
  use SOAP::Lite;
  my $soap = SOAP::Lite
    ->uri("http://pascal.fis.agh.edu.pl/SoapServer")
    ->proxy("http://pascal.fis.agh.edu.pl/~9wajda/soap/Serwer_w_php.php");

  print "Content-type: text/plain\n\n";
  print "Dodawanie    ",$soap->add(24, 6)->result,       "\n";
  print "Odejmowanie  ",$soap->subtract(24, 6)->result,  "\n";
  print "Mnozenie     ",$soap->multiply(24, 6)->result,   "\n";
  print "Dzielenie    ",$soap->divide(24, 6)->result,  "\n";