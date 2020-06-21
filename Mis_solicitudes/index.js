// var f = new Date();
// document.write(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
var datosFrontEnd = document.querySelector("#datos_atraer");
var nueva_solicitud = document.getElementById("nueva_solicitud");
var nuevaSolicitud = nuevaSolicitud();
var checkbox = document.querySelectorAll('input[type=checkbox]'); 
var eliminarSolicitud = document.getElementById("eliminar_solicitud");

function eliminarSolicitud(){
    eliminarSolicitud.addEventListener("click", function(){
    var checkboxes = document.getElementsByName('check')
    var contador=0;
    checkboxes.forEach((item) => {
        if (item.checked == true) {document.getElementById(contador).innerHTML=``}
        contador++;
    })
})}

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}
function nuevaSolicitud(){
    nueva_solicitud.addEventListener("click", function(){
        window.location = "nueva_solicitud/index.html"
    })
}
function traer(){
      fetch('index.json')
      .then(res => res.json())
        .then(datos =>
            {
                tabla(datos);
             })
}
function tabla(datos)
{
    var contador =0;
    datosFrontEnd.innerHTML = ''
    for (let valor of datos) {
        datosFrontEnd.innerHTML +=
        console.log(contador)
        `
        <tr id="${contador}">
            <th class="primer">${valor.Descripción}</th>
            <th>${valor.Estado}</th>
            <th>${valor.Fecha}</th>
            <input type="checkbox" name="check" onclick="onlyOne(this)">
         </tr>  
        
        `
        contador++;
        
        
       
    }
}
