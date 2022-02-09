#!/usr/bin/python3

import cgi
from lxml import etree
form = cgi.FieldStorage()

type = form.getvalue("type", "(no type)")  

if type=="pierwszy":
    xmlfile = open('../TI/z6/zadanie_6b/opcje1.xml', "r")
elif type=="drugi" :
    xmlfile = open('../TI/z6/zadanie_6b/opcje2.xml', "r")

xmlfile = str(xmlfile.read())

print ("Content-Type: application/xml")
print ()
print (xmlfile)
