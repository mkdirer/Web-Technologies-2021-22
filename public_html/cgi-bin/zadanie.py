#!/usr/bin/python3
from flask import request
import sys 
sys.stderr = sys.stdout 
import os 
from html import escape
import cgi
form = cgi.FieldStorage()
import datetime 

title = form.getvalue("title", "-")
author = form.getvalue("author", "-")
#title = "w poszukiwaniach"
#author = "gal anonim"
date = str(datetime.datetime.now().strftime("%Y/%m/%d %H:%M:%S"))
ip = os.environ["REMOTE_ADDR"]
#ip = "1234.234234.234"


openFile = open("../db.txt", "r")
fileContainer = openFile.read()
openFile.close()

if author != "-" and title != "-":
  fileContainer = fileContainer +";"+ title + ";" + author + ";" + date + ";" + ip + ";"

files = open("../db.txt", "w")
files.write(fileContainer)
files.close()

print("Content-Type: text/html")
print()
print ("<!DOCTYPE html>")
print ("""
<html>
  <head>
    <title>Form | Books</title>
    <style type='text/css'>
    
    table {
      margin: auto; 
      border-collapse: collapse; 
      border: 2px solid blue;
    }
    
    th {
      background: #fffd9c; 
      width: 170px;
    }
    
    #first-row{
      text-align: center;
    }
    
    tr {
      text-align: center; 
      background-color: #f0fffd; 
      height: 30px;
    }
    
    tr:nth-child(even) { 
      background-color: #ffe6fc; 
    }
    
    </style>
  </head>
<body>
<table>
<thead>
<tr id="first-row">
  <th>tytul</th>
  <th>autor</th>
  <th>date</th>
  <th>IP</th>
</tr>
</thead>
""")

fileContainer = fileContainer.split(";;")

for book in fileContainer:
  title = book.split(";")[0]
  author = book.split(";")[1]
  date = book.split(";")[2]
  ip = book.split(";")[3]
  print ("<tr><td>" + title + "</td><td>" + author + "</td><td>" + date + "</td><td>" + ip + "</td></tr>")
print ("""
</table></body></html>
""")








