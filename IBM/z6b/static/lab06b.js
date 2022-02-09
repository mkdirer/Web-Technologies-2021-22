const xmlHttp = new XMLHttpRequest();

function getData(type){
    try{
        let url = `../cgi-bin/lab06b.py?type=${type}`;
        xmlHttp.responseType = XMLDocument;
        xmlHttp.open('GET', url);
        xmlHttp.send(null);

        xmlHttp.onreadystatechange = (e) => {
            if(xmlHttp.readyState == 4){
                if(xmlHttp.status == 200){
                    response = xmlHttp.responseXML;
                    const data = response.documentElement;
                    const options = data.getElementsByTagName('option');
		    const parsedOptions = (Array.from(options).map(option => `<option>${option.firstChild.data}</option>`));
		    const elements = [`<option>Wybierz opcje</option>`, ...parsedOptions];
                    document.querySelector('.select__options').innerHTML = elements.join("\n");
                }
            }
        }
    }

    catch(err){
        alert("Wystąpił błąd! Połączenie z serwerem zostało przerwane.");
    }
}

function update()
{
    var x = document.querySelector('.select__options').value;
    document.getElementById("placeholder").innerHTML = x;
}



function firstSet(){    
    const type = 'pierwszy';
    getData(type);

}

function secondSet(){
    const type = 'drugi';
    getData(type);
}
