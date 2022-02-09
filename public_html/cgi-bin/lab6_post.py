#!/usr/bin/python3    
print ("Content-Type: text/html")
print ()

var="""
</br>
</br>
<center><h5>REKORDY DOSTĘPNE W BAZIE DANYCH</h5></center>
<table>
<tr> <td class="head_row" >Tytuł</td> <td class="head_row" >Autor</td> </tr>
"""
with open("../TI/z6/zadanie_6/file.txt") as pl:
  line = pl.readlines()
  a=list(i.split("|") for i in line)
for i in a:
    var+="""
<tr> <td>%s</td> <td>%s</td> </tr>
"""%(i[0],i[1][:-1])

var+="""</table>"""

print(var)