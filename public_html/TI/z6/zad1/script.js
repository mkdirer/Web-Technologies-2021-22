window.onload = sendRequest1;
function openForm(evt, name) 
{
	var i, divlink, buttonlink;
	divlink = document.getElementsByClassName("divlink");
	for (i = 0; i < divlink.length; i++) 
  {
	  divlink[i].style.display = "none";
	}
	buttonlink = document.getElementsByClassName("buttonlink");
	for (i = 0; i < buttonlink.length; i++) 
  {
	  buttonlink[i].className = buttonlink[i].className.replace(" active", "");
	}
	document.getElementById(name).style.display = "block";
	evt.currentTarget.className += " active";
}
var xmlHttp;
function getRequestObject()      
{
  if ( window.ActiveXObject)  
  {
    return ( new ActiveXObject("Microsoft.XMLHTTP")) ;
  }
  else if (window.XMLHttpRequest)
  {
    return (new XMLHttpRequest())  ;
  }
  else
  {
    return (null) ;
  }
}
function sendRequest()      
{
  var a='';
  if ((document.form1.pole1.value==""))
  {
    a+='Brak wsplrzednej X\n';
  }
  if ((document.form1.pole1.value>500))
  {
    a+='Nie miesci sie w canvas X\n';
  }
  if ((document.form1.pole2.value==""))
  {
    a+='Brak wsplrzednej X\n';
  }
  if ((document.form1.pole2.value>500))
  {
    a+='Nie miesci sie w canvas Y\n';
  }
  if ((document.form1.pole3.value == ""))
  {
    a+='Brak promienia\n';
  }
  if ((document.form1.pole3.value>500))
  {
    a+='Nie miesci sie w canvas Y\n';
  }
  if ((document.form1.pole4.value==""))
  {
    a+='Brak koloru\n';
  }
  if(a!='')
  {
    alert(a);
  } 
  else
  {
    xmlHttp = getRequestObject() ;
    if (xmlHttp) 
    {
      try 
      {
        var info1 = document.getElementById('pole1').value ;
        var info2 = document.getElementById('pole2').value ;
        var info3 = document.getElementById('pole3').value ;
        var info4 = document.getElementById('pole4').value ;
          
        var url = "../../../cgi-bin/zad1_get.py" ;
        url += "?pole1=" + info1;
        url += "&pole2=" + info2;
        url += "&pole3=" + info3;
        url += "&pole4=" + info4;
        xmlHttp.onreadystatechange = handleResponse ;
        xmlHttp.open("GET", url, true);
        xmlHttp.send(null);
      }
      catch (e) 
      {
        alert ("Nie mozna polaczyc sie z serwerem: " + e.toString()) ;
      }
    } 
    else 
    {
      alert ("Blad") ;
    }
  }
}
function handleResponse()      
{
  myDiv = document.getElementById("MyDivElement");
  if (xmlHttp.readyState == 4) 
  {
    if ( xmlHttp.status == 200 )  
    {
        response = xmlHttp.responseText;
        myDiv.innerHTML = response ;
    }
  }  
}
var request;
function sendRequest1()      
{
  request = getRequestObject() ;
  request.onreadystatechange = handleResponse1 ;
  request.open("GET", "../../../cgi-bin/zad1_post.py", true);
  request.send(null);
}
function handleResponse1()      
{
  if (request.readyState == 4)    
  {
    document.getElementById("MyDivElement").innerHTML=request.responseText;
  }
}

function draw(e){
  e.preventDefault();

  const formData = new FormData(document.querySelector('.form'))
  
  let data = [];
  
  for (var pair of formData.entries()) {
      data.push(pair[1]);
  }

  let parsedData = {
      x: Number.parseInt(data[0]),
      y: Number.parseInt(data[1]),
      R: Number.parseInt(data[2]),
      color: data[3]
  }

  parsedData = validate(parsedData);

  drawCanvas(parsedData);
  drawSVG(parsedData);
}

function validate(data){

  const container = document.querySelector('.circle-canvas');

  const width = container.clientWidth;
  const height = container.clientHeight;

  let radius = data.R;
  let x = data.x;
  let y = data.y;
  
  // Walidacja 
  if(radius > x){
      data.R = x;
  }
  
  if (radius > y){
      data.R = y;
  } 
  
  if (radius > (width - x) ) {
      data.R = width - x;
  } 
  
  if (radius > (height - y)) {
      data.R = height - y;
  }

  return data;
}

function drawSVG(data){
  const svgContainer = document.querySelector(".circle-svg");
  svgContainer.innerHTML = `<circle cx=${data.x} cy=${data.y} r=${data.R} style="fill:${data.color}" />`
}

function drawCanvas(data){
  let c = document.querySelector("canvas");
  c.width = 400;
  c.height = 300;
  let ctx = c.getContext("2d");
  
  ctx.beginPath();
  ctx.strokeStyle = data.color;

  ctx.arc(data.x, data.y, data.R, 0, 2 * Math.PI);
  ctx.stroke();
}
