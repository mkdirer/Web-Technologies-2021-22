var XMLHttpRequestObject = false;

if(window.XMLHttpRequest){
  XMLHttpRequestObject = new XMLHttpRequest();
}
else if(window.ActiveXObject){
  XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}

 
function listaOpcjiChange(dest, listaId)
{
  var div = document.getElementById(dest);
  var listaOpcji = document.getElementById(listaId);
  var str = listaOpcji[listaOpcji.selectedIndex].value;
  div.innerHTML = str;
}

function przetwarzajXML(xml, listaId)
{
  var listaOpcji = document.getElementById(listaId);
  var opcje = xml.getElementsByTagName('option');
  listaOpcji.options.length = 0;
  listaOpcji[0] = new Option("Wybierz opcję", "");
  for(var i = 0; i < opcje.length; i++){
    var opcja = opcje[i].firstChild.nodeValue;
    //opcja = opcja.replace(/^\\s+|\\s+$/g,'');
    opcja = opcja.match(/(\b\S+|\S+)/g).join(" ");
    listaOpcji[i + 1] = new Option(opcja, opcja);
  }
}
function pobierzDane(zestawId, listaId)    {
       
       if(XMLHttpRequestObject) {
           if(zestawId == 1){
              var param = "opcja1.xml";
           }
           else{
              var param = "opcja2.xml";
             }
           
           var url = "cgi-bin/z_7/czytaj.py"+"?opcja="+escape(param) ;
           XMLHttpRequestObject.open("GET", url, true);
           XMLHttpRequestObject.onreadystatechange = function()
    {
      if (XMLHttpRequestObject.readyState == 4 && 
          XMLHttpRequestObject.status == 200){
        var xml = XMLHttpRequestObject.responseXML;
        przetwarzajXML(xml, listaId);
      }
    }
    XMLHttpRequestObject.send(null);
  }
}
