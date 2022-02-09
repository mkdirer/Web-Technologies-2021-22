#!/usr/bin/python3
from flask import request
import sys 
sys.stderr = sys.stdout 
import os 
from html import escape 
  
print ("Content-type: text/html" )
print ("")
print ("<html><head><title>CGI ENV from python</title></head><body><p>" )
print ("Running:") 
print ("<b>Python %s lolo</b><br><br>" %(sys.version)) 
print ("Environmental variables:<br>" )
#print ("ares: " %(escape(request.remote_addr)))
print ("<ul>") 
for k in sorted(os.environ): 
  print ("<li><b>%s:</b>\t\t%s</li><br>" %(k, os.environ[k]) )
print ("</ul></p></body></html>")
