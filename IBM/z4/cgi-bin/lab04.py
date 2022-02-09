#!/usr/bin/python3
from flask import request
import sys 
sys.stderr = sys.stdout 
import os 
import cgi
upload = cgi.FieldStorage()
import datetime 
from html import escape

print("Content-Type: text/html")
print ("""
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Baza_Książek</title>
  <center><h1>REKORDY DOSTEPNE W BAZIE DANCYH</h1></center>
    <style type='text/css'>
    table {
      margin: auto; 
      border: 2px solid blue;
      border-collapse: collapse; 
    }
    tr {
      background-color: #dfdff1;
      text-align: center; 
      height: 30px;
    }
    tr:nth-child(even) { 
      background-color: #a1d6d6; 
    }
    th {
      width: 170px;
      background: #f7f590; 
    }
    #naglowek{
      text-align: center;
    }
    </style>
  </head>
<body>
<table>
<thead>
<tr id="naglowek">
  <th>tytul</th>
  <th>autor</th>
  <th>date</th>
  <th>IP</th>
</tr>
</thead>
""")

file_open = open("/home/vcap/app/static/dane.txt", "r")
result = file_open.read()
file_open.close()

data = str(datetime.datetime.now().strftime("%Y/%m/%d %H:%M:%S"))
ip = os.environ["REMOTE_ADDR"]
tytul = upload.getvalue("tytul", "*")
autor = upload.getvalue("autor", "*")

if autor != "*" and tytul != "*":
  result = result +"|"+ tytul + "|" + autor + "|" + data + "|" + ip + "|"

file_close = open("/home/vcap/app/static/dane.txt", "w")
file_close.write(result)
file_close.close()

result = result.split("||")

for ksiazka in result:
  tytul = ksiazka.split("|")[0]
  autor = ksiazka.split("|")[1]
  data = ksiazka.split("|")[2]
  ip = ksiazka.split("|")[3]
  print ("<tr><td>" + tytul + "</td><td>" + autor + "</td><td>" + data + "</td><td>" + ip + "</td></tr>")
print("")
print ("</table></body></html>")








