var mainPath="ti-websidelw-zadanie12.eu-gb.mybluemix.net/";
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
function _list() {
   document.getElementById('result').innerHTML = '';
   document.getElementById('data').innerHTML = '';  
   request = getRequestObject() ;
   request.onreadystatechange = function() {
      if (request.readyState == 4)    {
         objJSON = JSON.parse(request.response);
         var txt = "";
         for ( var id in objJSON )  {
             txt +=  id+": {" ;
             for ( var prop in objJSON[id] ) {             
                 if ( prop !== '_id')
                   { txt += prop+":"+objJSON[id][prop]+",";  }
                 else
                   { txt += "id:" + objJSON[id][prop]['$oid']+"," ; }
             }
             txt +="}<br/>";
         }
         document.getElementById('result').innerHTML = txt;
      }
   }
   request.open("GET", mainPath+"rest/list", true);
   request.send(null);
}

// Wstawianie rekordow do bazy
function _ins_form() {
   var form1 = "<form name='add'><table>" ;
   form1    += "<tr><td>ident</td><td><input type='text' name='ident' value='ident' ></input></td></tr>";
   form1    += "<tr><td>fname</td><td><input type='text' name='fname' value='fname' ></input></td></tr>";
   form1    += "<tr><td>lname</td><td><input type='text' name='lname' value='lname' ></input></td></tr>";  
   form1    += "<tr><td>faculty</td><td><input type='text' name='faculty' value='faculty' ></input></td></tr>";
   form1    += "<tr><td>year</td><td><input type='text' name='year' value='year' ></input></td></tr>";
   form1    += "<tr><td></td><td><input type='button' value='wyslij' onclick='_insert(this.form)' ></input></td></tr>";
   form1    += "</table></form>";
   document.getElementById('data').innerHTML = form1;
   document.getElementById('result').innerHTML = '';
}

function _insert(form)  {
    var user = {};
    user.ident = form.ident.value;
    user.fname = form.fname.value;
    user.lname = form.lname.value;
    user.faculty = form.faculty.value;
    user.year = form.year.value;
    txt = JSON.stringify(user);
    document.getElementById('result').innerHTML = '';
    document.getElementById('data').innerHTML = '';  
    request = getRequestObject() ;
    request.onreadystatechange = function() {
       if (request.readyState == 4 && request.status == 200 )    {
          document.getElementById('result').innerHTML = request.response;
       }
    }
    request.open("POST",  mainPath+"rest/save", true);
    request.send(txt);
}

// Usuwanie rekordow z bazy danych
function _del_list() {
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
    request.open("GET", mainPath+"rest/list", true);
    request.send(null);
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
    request.open("DELETE", mainPath+"rest/delete1/"+id_mongo, true);

    request.send(null);
}

// Poprawa rekordow w bazie danych
function _upd_list() {
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
           txt += "</select><br/><input type='button' value='popraw' onclick='_upd_form(this.form)'/></form>";
          document.getElementById('data').innerHTML = txt;
          }
       }
       request.open("GET", mainPath+"rest/list", true);
       request.send(null);
  }




function _upd_form(form) {
    var rec = form.del.selectedIndex;
    id_rec = document.getElementsByTagName('option')[rec].value;
    id_mongo = objJSON[id_rec]['_id']['$oid'];
    console.log(id_mongo);
    document.getElementById('result').innerHTML = '';
    document.getElementById('data').innerHTML = '';  
  var form1 = "<form name='add'><table>" ;
  form1    += "<tr><td>ident</td><td><input type='text' name='ident' value='"+objJSON[id_rec]['ident']+"' ></input></td></tr>";
  form1    += "<tr><td>fname</td><td><input type='text' name='fname' value='"+objJSON[id_rec]['fname']+"' ></input></td></tr>";
  form1    += "<tr><td>lname</td><td><input type='text' name='lname' value='"+objJSON[id_rec]['lname']+"' ></input></td></tr>";  
  form1    += "<tr><td>faculty</td><td><input type='text' name='faculty' value='"+objJSON[id_rec]['faculty']+"' ></input></td></tr>";
  form1    += "<tr><td>year</td><td><input type='text' name='year' value='"+objJSON[id_rec]['year']+"' ></input></td></tr>";
  form1    += "<tr><td></td><td><input type='button' value='wyslij' onclick='_update(this.form)' ></input></td></tr>";
  form1    += "</table></form>";
  document.getElementById('data').innerHTML = form1;
  document.getElementById('result').innerHTML = '';
}

function _update(form) {
    var user = {};
    user.ident = form.ident.value;
    user.fname = form.fname.value;
    user.lname = form.lname.value;
    user.faculty = form.faculty.value;
    user.year = form.year.value;
    txt = JSON.stringify(user);
    document.getElementById('result').innerHTML = '';
    document.getElementById('data').innerHTML = '';  
    request = getRequestObject() ;
    request.onreadystatechange = function() {
         if (request.readyState == 4 && request.status == 200 )    {
            document.getElementById('result').innerHTML = request.response;
          }
    }
    request.open("PUT", mainPath+"rest/update1/"+id_mongo, true);
    request.send(txt);
}


function _find_record(){
   var form1 = "<form name='find'><table>" ;
   form1    += "<tr><td>ident</td><td><input type='text' name='ident' value='ident' ></input></td></tr>";
   form1    += "<tr><td></td><td><input type='button' value='Szukaj' onclick='_find(this.form)' ></input></td></tr>";
   form1    += "</table></form>";
   document.getElementById('data').innerHTML = form1;
   document.getElementById('result').innerHTML = '';


}


function _find(form){
	var user = {};
	user.ident = form.ident.value;
	ident_txt =  JSON.stringify(user);
	document.getElementById('result').innerHTML = '';
   document.getElementById('data').innerHTML = '';  
	request = getRequestObject() ;
        request.onreadystatechange = function() {
          if (request.readyState == 4)    {
           objJSON = JSON.parse(request.response);
           console.log(objJSON);
           var txt = "";
           for ( var id in objJSON )  {
             txt +=  id+": {" ;
             for ( var prop in objJSON[id] ) {             
                 if ( prop !== '_id')
                   { txt += prop+":"+objJSON[id][prop]+",";  }
                 else
                   { txt += "id:" + objJSON[id][prop]['$oid']+"," ; }
             }
             txt +="}<br/>";
           }
          document.getElementById('result').innerHTML = txt;
         }
        }

	request.open("POST", mainPath+"rest/find", true);
   request.send(ident_txt);


}
