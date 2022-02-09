#!/usr/bin/env python3
import cgi
import os
import datetime
import json

form = cgi.FieldStorage()
requestType = form.getvalue("type", "4")
try:
  requestType = int(requestType)
except ValueError:
  requestType = 0

def getDataToAdd(requestType):
  if requestType == 1:
    x = form.getvalue("x", "")
    y = form.getvalue("y", "")
    r = form.getvalue("r", "")
    color = form.getvalue("color", "")
    return "1;"+x+";"+y+";"+r+";"+color+";;"

  if requestType == 2:
    x1 = form.getvalue("x1", "")
    y1 = form.getvalue("y1", "")
    x2 = form.getvalue("x2", "")
    y2 = form.getvalue("y2", "")
    color = form.getvalue("color", "")
    return "2;"+x1+";"+y1+";"+x2+";"+y2+";"+color+";;"

  return ""



if requestType in (1, 2):
  date = str(datetime.datetime.now().strftime("%Y/%m/%d %H:%M:%S"))
  ip = os.environ['REMOTE_ADDR']
  fileOpenContent = open("../zad1/zad1.txt", "r")
  fileContent = fileOpenContent.read()
  fileOpenContent.close()
  fileContent = fileContent + getDataToAdd(requestType)
  file = open("../zad1/zad1.txt", "w")
  fileContent = "".join(fileContent.split("\n")[0:])
  file.write(fileContent)
  file.close()
  print("Content-type: text/html")
  print()
  print("<!DOCTYPE html>")
  print("""
  Pomyslnie dodano rekord
  """)


if requestType == 3: #KOLA
  fileOpenContent = open("../zad1/zad1.txt", "r")
  fileContent = fileOpenContent.read()
  fileOpenContent.close()
  fileContent = fileContent.split(";;")
  response = []
  for line in fileContent:
    data = line.split(";")
    if data[0] == "2":
      continue;
    if len(line) < 10:
      continue
    x = data[1]
    y = data[2]
    r = data[3]
    color = data[4]
    figure = dict()
    figure['x'] = x
    figure['y'] = y
    figure['r'] = r
    figure['color'] = color
    response.append(figure)

  print("Content-type: application/json")
  print()
  print(json.dumps(response))

if requestType == 4: #PROSTOKATY
  fileOpenContent = open("../zad1/zad1.txt", "r")
  fileContent = fileOpenContent.read()
  fileOpenContent.close()
  fileContent = fileContent.split(";;")
  response = []
  for line in fileContent:
    data = line.split(";")
    if data[0] == "1":
      continue;
    if len(line) < 10:
      continue
    x1 = data[1]
    y1 = data[2]
    x2 = data[3]
    y2 = data[4]
    color = data[5]
    figure = dict()
    figure['x1'] = x1
    figure['y1'] = y1
    figure['x2'] = x2
    figure['y2'] = y2
    figure['color'] = color
    response.append(figure)

  print("Content-type: application/json")
  print()
  print(json.dumps(response))
