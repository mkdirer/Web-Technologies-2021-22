var request;
var objJSON;
var id_mongo;
function getRequestObject()      {
   if ( window.ActiveXObject)  {
      return ( new ActiveXObject("Microsoft.XMLHTTP")) ;
   } else if (window.XMLHttpRequest)  {
      return (new XMLHttpRequest())  ;
   } else {
      return (null) ;
   }
}

// Lista rekordow w bazie
function _list_read(form) {
   document.getElementById('result').innerHTML = '';
   document.getElementById('data').innerHTML = '';  
   request = getRequestObject() ;
   request.onreadystatechange = function() {
      if (request.readyState == 4)    {
         objJSON = JSON.parse(request.response);
         var txt = "";
         for ( var id in objJSON )  {
             if(objJSON[id]['catego'] == form.catego.value) {
                txt +=  id+": {" ;
                for ( var prop in objJSON[id] ) {             
                    if ( prop !== '_id')
                    { txt += prop+":"+objJSON[id][prop]+",";  }
                    else
                    { txt += "id:" + objJSON[id][prop]['$oid']+"," ; }
                }
                txt +="}<br/>";
             }
         }
         document.getElementById('result').innerHTML = txt;
      }
   }
   request.open("GET", "http://pascal.fis.agh.edu.pl/~9wajda/TI/zadanie2/rest/list", true);
   request.send(null);
}


function _find_record() {
   var form1 = "<form name='list'><table>" ;
   form1    += "<tr><td>kategoria</td><td><input type='text' name='catego' value='kategoria' ></input></td></tr>";
   form1    += "<tr><td></td><td><input type='button' value='wykonaj' onclick='_list_read(this.form)' ></input></td></tr>";
   form1    += "</table></form>";
   document.getElementById('data').innerHTML = form1;
   document.getElementById('result').innerHTML = '';
}

function _dates_list(form) {
   document.getElementById('result').innerHTML = '';
   document.getElementById('data').innerHTML = '';  
   request = getRequestObject() ;
   request.onreadystatechange = function() {
      if (request.readyState == 4)    {
         objJSON = JSON.parse(request.response);
         var txt = "";
         for ( var id in objJSON )  {
             var data_wprowadzenia = new Date(objJSON[id]['data_wprowadzenia']);
             if(data_wprowadzenia>=new Date(form.czas1.value) && data_wprowadzenia<=new Date(form.czas2.value)) {
                txt +=  id+": {" ;
                for ( var prop in objJSON[id] ) {             
                    if ( prop !== '_id')
                    { txt += prop+":"+objJSON[id][prop]+",";  }
                    else
                    { txt += "id:" + objJSON[id][prop]['$oid']+"," ; }
                }
                txt +="}<br/>";
             }
         }
         document.getElementById('result').innerHTML = txt;
      }
   }
   request.open("GET", "http://pascal.fis.agh.edu.pl/~9wajda/TI/zadanie2/rest/list", true);
   request.send(null);
}


function _find_record_time() {
   var form1 = "<form name='list_dates'><table>" ;
   form1    += "<tr><td>Czas od (rrrr-mm-dd)</td><td><input type='text' name='czas1' value='data' ></input></td></tr>";
   form1    += "<tr><td>Czas do (rrrr-mm-dd)</td><td><input type='text' name='czas2' value='data' ></input></td></tr>";
   form1    += "<tr><td></td><td><input type='button' value='wykonaj' onclick='_dates_list(this.form)' ></input></td></tr>";
   form1    += "</table></form>";
   document.getElementById('data').innerHTML = form1;
   document.getElementById('result').innerHTML = '';
}

function _list() {
   document.getElementById('result').innerHTML = '';
   document.getElementById('data').innerHTML = '';  
   request = getRequestObject() ;
   request.onreadystatechange = function() {
      if (request.readyState == 4)    {
         objJSON = JSON.parse(request.response);
         var txt = "";
         for ( var id in objJSON )  {
             txt +=  id+": " ;
             for ( var prop in objJSON[id] ) {
                 if ( prop == 'catego')
                   { txt += objJSON[id][prop]+",";  }
             }
             txt +="<br/>";
         }
         document.getElementById('result').innerHTML = txt;
      }
   }
   request.open("GET", "http://pascal.fis.agh.edu.pl/~9wajda/TI/zadanie2/rest/list", true);
   request.send(null);
}

function _insert(form)  {
    var task = {};
    task.title = form.title.value;
    task.tresc = form.tresc.value;
    task.catego = form.catego.value;
    task.data_wprowadzenia = form.data_wprowadzenia.value;
    task.data_zakonczenia = form.data_zakonczenia.value;
    task.status = form.status.value;
    txt = JSON.stringify(task);
    document.getElementById('result').innerHTML = '';
    document.getElementById('data').innerHTML = '';  
    request = getRequestObject() ;
    request.onreadystatechange = function() {
       if (request.readyState == 4 && request.status == 200 )    {
          document.getElementById('result').innerHTML = request.response;
       }
    }
    request.open("POST", "http://pascal.fis.agh.edu.pl/~9wajda/TI/zadanie2/rest/save", true);
    request.send(txt);
}


function _ins_form() {
   var form1 = "<form name='add_task'><table>" ;
   form1    += "<tr><td>tytul</td><td><input type='text' name='title' value='tytul' ></input></td></tr>";
   form1    += "<tr><td>tresc</td><td><input type='text' name='tresc' value='tresc' ></input></td></tr>";
   form1    += "<tr><td>kategoria</td><td><input type='text' name='catego' value='kateogoria' ></input></td></tr>";
   form1    += "<tr><td>data_wprowadzenia (rrrr-mm-dd)</td><td><input type='text' name='data_wprowadzenia' value='data' ></input></td></tr>";  
   form1    += "<tr><td>data_zakonczenia (rrrr-mm-dd)</td><td><input type='text' name='data_zakonczenia' value='data' ></input></td></tr>";
   form1    += "<tr><td>Status</td><td><input type='text' name='status' value='status' ></input></td></tr>";
   form1    += "<tr><td></td><td><input type='button' value='wyslij' onclick='_insert(this.form)' ></input></td></tr>";
   form1    += "</table></form>";
   document.getElementById('data').innerHTML = form1;
   document.getElementById('result').innerHTML = '';
}

function _list_dod() {
   var form1 = "<form name='add'><table>" ;
   form1    += "<tr><td>kategoria</td><td><input type='text' name='catego' value='kategoria' ></input></td></tr>";
   form1    += "<tr><td></td><td><input type='button' value='wyslij' onclick='_insert(this.form)' ></input></td></tr>";
   form1    += "</table></form>";
   document.getElementById('data').innerHTML = form1;
   document.getElementById('result').innerHTML = '';
}

function _delete(form) {
    var rec = form.del.selectedIndex;
    var id = document.getElementsByTagName('option')[rec].value;
    var id_mongo = objJSON[id]['_id']['$oid'];
    document.getElementById('result').innerHTML = '';
    document.getElementById('data').innerHTML = '';  
    request = getRequestObject() ;
    request.onreadystatechange = function() {
       if (request.readyState == 4 )    {
           document.getElementById('result').innerHTML = request.response;
       }
    }
    request.open("DELETE", "http://pascal.fis.agh.edu.pl/~9wajda/TI/zadanie2/rest/delete1/"+id_mongo, true);

    request.send(null);
}


function _del_form() {
    document.getElementById('result').innerHTML = '';
    document.getElementById('data').innerHTML = '';  
    request = getRequestObject() ;
    request.onreadystatechange = function() {
       if (request.readyState == 4) {
          objJSON = JSON.parse(request.response);
          var txt = "<form name='data'><select name='del' size='10'>";
          for ( var id in objJSON ) {
              txt +=  "<option value="+id+" >"+id+": {" ;
              for ( var prop in objJSON[id] ) {             
                 if ( prop !== '_id')
                   { txt += prop+":"+objJSON[id][prop]+",";  }
                 else
                   { txt += "id:"+ objJSON[id][prop]['$oid']+"," ;  }
              }     
              txt +="}</option>";
          }
          txt += "</select><br/><input type='button' value='usun' onclick='_delete(this.form)'/></form>";
          document.getElementById('data').innerHTML = txt;
       }
    }
    request.open("GET", "http://pascal.fis.agh.edu.pl/~9wajda/TI/zadanie2/rest/list", true);
    request.send(null);
}

function _update(form) {
    var task = {};
    task.status = form.status.value;
    txt = JSON.stringify(task);
    document.getElementById('result').innerHTML = '';
    document.getElementById('data').innerHTML = '';  
    request = getRequestObject() ;
    request.onreadystatechange = function() {
         if (request.readyState == 4 && request.status == 200 )    {
            document.getElementById('result').innerHTML = request.response;
          }
    }
    request.open("PUT", "http://pascal.fis.agh.edu.pl/~9wajda/TI/zadanie2/rest/update1/"+id_mongo, true);
    request.send(txt);
}

function _upd_form(form) {
    var rec = form.del.selectedIndex;
    id_rec = document.getElementsByTagName('option')[rec].value;
    id_mongo = objJSON[id_rec]['_id']['$oid'];
    console.log(id_mongo);
    document.getElementById('result').innerHTML = '';
    document.getElementById('data').innerHTML = '';  
  var form1 = "<form name='status'><table>" ;
  form1    += "<tr><td>Status</td><td><input type='text' name='status' value='"+objJSON[id_rec]['status']+"' ></input></td></tr>";
  form1    += "<tr><td></td><td><input type='button' value='zmien' onclick='_update(this.form)' ></input></td></tr>";
  form1    += "</table></form>";
  document.getElementById('data').innerHTML = form1;
  document.getElementById('result').innerHTML = '';
}

function _upd_list_item() {
       document.getElementById('result').innerHTML = '';
       document.getElementById('data').innerHTML = '';  
       request = getRequestObject() ;
       request.onreadystatechange = function() {
         if (request.readyState == 4)    {
           objJSON = JSON.parse(request.response);
           var txt = "<form name='data'><select name='del' size='10'>";
           for ( var id in objJSON )  {
              txt +=  "<option value="+id+" >"+id+": {" ;
              for ( var prop in objJSON[id] ) {             
                 if ( prop !== '_id')
                   { txt += prop+":"+objJSON[id][prop]+",";  }
                 else
                   { txt += "oid:" + objJSON[id][prop]['$oid']+"," ;  }
              }    
              txt +="}</option>";
           }
           txt += "</select><br/><input type='button' value='zmien' onclick='_upd_form(this.form)'/></form>";
          document.getElementById('data').innerHTML = txt;
          }
       }
       request.open("GET", "http://pascal.fis.agh.edu.pl/~9wajda/TI/zadanie2/rest/list", true);
       request.send(null);
  }
