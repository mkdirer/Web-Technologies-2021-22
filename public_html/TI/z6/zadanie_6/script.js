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
    a+='Brak tytułu\n';
  }
  if ((document.form1.pole2.value==""))
  {
    a+='Brak autora\n';
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
          
        var url = "../../../cgi-bin/lab6_get.py" ;
        url += "?pole1=" + info1;
        url += "&pole2=" + info2;
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
  request.open("GET", "../../../cgi-bin/lab6_post.py", true);
  request.send(null);
}
function handleResponse1()      
{
  if (request.readyState == 4)    
  {
    document.getElementById("MyDivElement").innerHTML=request.responseText;
  }
}