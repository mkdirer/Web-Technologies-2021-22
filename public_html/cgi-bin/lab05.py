#!/usr/bin/env python3

import cgi
import os

from lxml import etree

query_string = os.environ.get("QUERY_STRING", "nostring")

if query_string:
	sort = query_string.split('=')[1]
else: 
	sort = ''

xmlfile = open('../TI/z5/lab05.xml') 
xslfile = open('../TI/z5/lab05.xsl') 
xmldom = etree.parse(xmlfile) 
xsldom = etree.parse(xslfile) 
transform = etree.XSLT(xsldom)

result = transform(xmldom, sort='"'+str(sort)+'"')

print ("Content-type: text/html")
print ("""
<!doctype html>
<html lang="pl-PL">
<head>
<meta charset="utf-8" />
<title>Sortowanie</title>
</head>
<body>
<h1> Wybierz opcje sortowania:</h1>
<form name="form1">
    <input type="submit" name="sort" value="autor" />
    <input type="submit" name="sort" value="tytul" />
    <input type="submit" name="" value="nieposortowana wersja" />
</form>
<br></br>
</body>
</html>
""")
print(result)
