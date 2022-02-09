#!/usr/bin/python3
from os import environ
import cgi
import cgitb; cgitb.enable()
form = cgi.FieldStorage()
pole1 = form.getvalue("pole1", " ")
pole2 = form.getvalue("pole2", " ")
with open("/home/vcap/app/static/file.txt", 'a') as pl:
    pl.write(str(pole1)+"|"+str(pole2)+"\n")
    
print ("Content-Type: text/html")
print ()

var="""
</br>
</br>
<center><h5>REKORDY DOSTĘPNE W BAZIE DANYCH</h5></center>
<table>
<tr> <td class="head_row" >Tytuł</td> <td class="head_row" >Autor</td> </tr>
"""
with open("/home/vcap/app/static/file.txt") as pl:
  line = pl.readlines()
  a=list(i.split("|") for i in line)
for i in a:
    var+="""
<tr> <td>%s</td> <td>%s</td> </tr>
"""%(i[0],i[1][:-1])

var+="""</table>"""

print(var)