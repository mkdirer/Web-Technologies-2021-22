#!/usr/bin/python3    
print ("Content-Type: text/html")
print ()

var="""
</br>
</br>
<center><h5>REKORDY DOSTĘPNE W BAZIE DANYCH</h5></center>
<table>
"""
with open("../TI/z6/zad1/file.txt") as pl:
  line = pl.readlines()
  a=list(i.split("|") for i in line)
for i in a:
    var+="""
<tr> <td>wspolrzedne:" x = "+%s</td> <td>" y = "+%s</td> <td>"promien: r= "+%s</td> <td>"kolor = "%s</td></tr>
"""%(i[0],i[1],i[2],i[3][:-1])

var+="""</table>"""

print(var)
