#!/bin/sh
echo "Content-Type: text/html"
echo
echo "<html><body>"
echo "<p>"
echo "skrypt znajdujący wzorzec podany w QUERY_STRING w plikach w katalogu bieżącym"
echo "</p>"
echo "<p>"
echo "$QUERY_STRING"
echo "</p>"
echo "<p>"
SLOWO=`echo "$QUERY_STRING" | sed s/^.*=//`
echo "Poszukiwanie $SLOWO... w `pwd`"
echo "</p>"
echo "<ul>"
grep -rli "$SLOWO" * |
while read f
do
  echo "<li><a href=\"$f\">$f</a></li>"
done
echo "</ul>"
echo "<p>"
echo "OK"
echo "</p>"
echo "</body></html>"
