#!/usr/bin/env python3
from lxml import etree
import os
import sys
import cgi

query_string = os.environ.get("QUERY_STRING", "nostring")

if query_string:
	sortby = query_string.split('=')[1]
else: 
	sortby = ''

xmlfile = open("../static/zad5.xml")
xslfile = open("../static/zad5.xsl")
xmldom = etree.parse(xmlfile)
xsldom = etree.parse(xslfile)

transform = etree.XSLT(xsldom)
result = transform(xmldom, sortby='"'+str(sortby)+'"')

print("Content-type: text/html")
print()
print(result)