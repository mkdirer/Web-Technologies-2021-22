function getHTTPObject() {
  var xhr = false;
  if (window.XMLHttpRequest)   { //utworzenie nowego obiektu XMLHttpRequest
    xhr = new XMLHttpRequest();
  }
  else if (window.ActiveXObject) {
         try { xhr = new XMLHttpRequest();
         }
         catch(e) {
           try { xhr = new ActiveXObject("Microsoft.XMLHTTP");
           }
           catch(e) { xhr = false;
           }
         }
       }
  return xhr;
}
