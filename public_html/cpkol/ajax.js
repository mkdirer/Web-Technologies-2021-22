var xmlHttp;
function getRequestObject() {
    if (window.ActiveXObject) {
        return (new ActiveXObject("Microsoft.XMLHTTP"));
    } else if (window.XMLHttpRequest) {
        return (new XMLHttpRequest());
    } else {
        return (null);
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
  getCategory();
});

function autoid() {
    document.getElementById("id").disabled = document.getElementById("autoidf").checked;
}

function getCategory() {
    xmlHttp = getRequestObject();
    if (xmlHttp) {
        try {
            var url = "biblioteka";
            xmlHttp.onreadystatechange = handleGetCategory;
            xmlHttp.open("GET", url, true);
            xmlHttp.send(null);
        }
        catch (e) {
            alert("Nie mozna polaczyc sie z serwerem: " + e.toString());
        }
    } else {
        alert("Blad");
    }
}

function handleGetCategory() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            var rec = document.getElementById("cat");
		var rec2=document.getElementById("cat2");
		var rec3=document.getElementById("cat3");
            let html = "<option>Wybierz kategorie</option>";
            var res = JSON.parse(xmlHttp.response);
            for (i = 0; i < res.length; i++) {
                html += "<option>" + res[i].category + '</option>';
            }
            rec.innerHTML = html;
	rec2.innerHTML=html;
	rec3.innerHTML=html;
        }
    }
}

function addcategory() {
    xmlHttp = getRequestObject();
    var form = document.getElementById("inscat");
    var obj = { "category": form.category.value };
    if (xmlHttp) {
        try {
            var url = "biblioteka";
            xmlHttp.onreadystatechange = addCategoryInsert;
            xmlHttp.open("POST", url, true);
            xmlHttp.setRequestHeader("Content-Type", "application/json");
            xmlHttp.send(JSON.stringify(obj));
        }
        catch (e) {
           alert("Nie mozna polaczyc sie z serwerem: " + e.toString());
        }
    } else {
      alert("Blad");
    }
};

function addCategoryInsert() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            getCategory();
        }
    }
}


function getData() {
    xmlHttp = getRequestObject();
    if (xmlHttp) {
        try {
		var cat=document.getElementById("cat2").value;
            var url = "biblioteka/"+cat;
            xmlHttp.onreadystatechange = handleGetData;
            xmlHttp.open("GET", url, true);
            xmlHttp.send(null);
        }
        catch (e) {
            alert("Nie mozna polaczyc sie z serwerem: " + e.toString());
        }
    } else {
        alert("Blad");
    }
}

function handleGetData() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            var rec = document.getElementById("records");
            let html = "<table><th>ID</th><th>Tytul</th><th>Autor</th><th>Kategoria</th>";
            var res = JSON.parse(xmlHttp.response);
            for (i = 0; i < res.length; i++) {
                html += "<tr><td>" + res[i].id + "</td><td>" + res[i].title + "</td><td>" + res[i].author + "</td><td>"
                    + res[i].cat + '</td></tr>';
            }
            rec.innerHTML = html + "</table>";
        }
    }
}

function insert() {
    xmlHttp = getRequestObject();
    var form = document.getElementById("ins");
    var obj = { "title": form.title.value, "author": form.author.value };
    if (!document.getElementById("autoidf").checked) obj.id = form.id.value;
    if (xmlHttp) {
        try {
            var url = "biblioteka/" + form.cat.value;
            xmlHttp.onreadystatechange = handleInsert;
            xmlHttp.open("POST", url, true);
	    xmlHttp.setRequestHeader("Content-Type", "application/json");
            xmlHttp.send(JSON.stringify(obj));
        }
        catch (e) {
           alert("Nie mozna polaczyc sie z serwerem: " + e.toString());
        }
    } else {
      alert("Blad");
    }
};

function remove()
{
    document.getElementById("records").innerHTML="";
}

function handleInsert() {
    if (xmlHttp.readyState == 4) { }
}

function getOne() {
    xmlHttp = getRequestObject();
    var form = document.getElementById("singrec");
    if (xmlHttp) {
        try {
            var url = "biblioteka/" + form.cat.value+ "/" + form.id.value;
            xmlHttp.onreadystatechange = handleGetOne;
            xmlHttp.open("GET", url, true);
       		xmlHttp.send(null);
        }
        catch (e) {
           alert("Nie mozna polaczyc sie z serwerem: " + e.toString());
        }
    } else {
      alert("Blad");
    }
};

function handleGetOne() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            var rec = document.getElementById("response");
            rec.innerHTML = xmlHttp.response;
        }
    }
}

function delOne() {
    xmlHttp = getRequestObject();
    var form = document.getElementById("delrec");
    if (xmlHttp) {
        try {
            var url = "biblioteka/"+form.id.value;
            xmlHttp.onreadystatechange = delOneHandle;
            xmlHttp.open("DELETE", url, true);
            //xmlHttp.setRequestHeader("Content-Type", "application/json");
            xmlHttp.send(null);
        }
        catch (e) {
           alert("Nie mozna polaczyc sie z serwerem: " + e.toString());
        }
    } else {
      alert("Blad");
    }
};

function delOneHandle() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
           var rec = document.getElementById("response");
            rec.innerHTML = xmlHttp.response;
        }
    }
}
