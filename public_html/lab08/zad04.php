<?php
session_start();
function __autoload($class_name) {
include $class_name . '.php' ;
}
$user = new Register_new;
//Funkcjonalnosc zakomentowana - brak metody _is_logged()
if ( ! $user->_is_logged() )
{
echo "<p><a href='zad04reg.html'>Rejestracja w serwisie</a></p>";
echo "<p><a href='zad04log.html'>Logowanie do serwisu</a></p>";
}
else
{
echo "<p><a href='zad04user.php'>Dane uzytkownika</a></p>" ;
echo "<p><a href='zad04all.php'>Zarejestrowani uzytkownicy</a></p>" ;
echo "<p><a href='zad04out.php'>Wylogowanie z serwisu</a></p>" ;
}

?>
