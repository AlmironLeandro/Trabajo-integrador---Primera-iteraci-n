// var f = new Date();
// document.write(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
var datosFrontEnd = document.querySelector("#datos_atraer");
var nueva_solicitud = document.getElementById("nueva_solicitud");
var nuevaSolicitud = nuevaSolicitud();
var checkbox = document.querySelectorAll('input[type=checkbox]'); 
var eliminarSolicitud = document.getElementById("eliminar_solicitud");
var varEliminarSolicitud = eliminarSolicitudes();
var modificarSolicitud = document.getElementById("modificar_solicitud");
var botonEnviar = document.getElementById("enviar");
var asd = modificarSolicitudes();
var menu = document.querySelector(".menuDesplegable");



function modificarSolicitudes(){
    modificarSolicitud.addEventListener("click", function(){
        var checkboxes = document.getElementsByName('check');
        for(i=0;i< checkboxes.length; i++){
            let contadorTh = 7+i;
            if (checkboxes[i].checked) {
                menu.classList.toggle("menuDesplegable");
               console.log(document.getElementById(`${(contadorTh)}`));
                    botonEnviar.addEventListener("click",function()
                    {
                        document.getElementById(`${(contadorTh)}`).innerHTML = `${document.getElementById("textoSolicitud").value}`;
                    });
                    
             
                }  
        }
        
    })
    
}

function eliminarSolicitudes(){
    eliminarSolicitud.addEventListener("click", function(){
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item.checked) {
            document.getElementById(item.getAttributeNode("class").value).innerHTML=``} 
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

    
    var contadorTr =0;
    var contadorTh = 7;
    for (let valor of datos) {
        datosFrontEnd.innerHTML +=
        `
        <tr id="${contadorTr}">
            <th id="${contadorTh}"  class="primer">${valor.Descripción}</th>
            <th>${valor.Estado}</th>
            <th>${valor.Fecha}</th>
            <th><input type="checkbox" class="${contadorTr}" name="check" onclick="onlyOne(this)"></th>
         </tr>  
        `
        contadorTh++;
        contadorTr++;
    }
}
