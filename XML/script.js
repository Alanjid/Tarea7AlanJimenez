function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    myFunction(this);
  }
  xhttp.open("GET", "prueba.xml");
  xhttp.send();
}
function myFunction(xml) {
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("juego");
  const y = xmlDoc.getElementsByTagName("entregas");
  let table="<tr><th>title</th><th>genero</th><th>entregas</th></tr>";
  for (let i = 0; i <x.length; i++) {
    table += "<tr><td>" +
    x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("genero")[0].childNodes[0].nodeValue +
    "</td><td>";
    for (let u = 0; u < y.length; u++) {
      table +=y[i].getElementsByTagName("title2")[0].childNodes[0].nodeValue ;
    }
    table +="</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}