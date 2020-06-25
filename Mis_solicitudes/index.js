// var f = new Date();
// document.write(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
var datosFrontEnd = document.querySelector("#datos_atraer");
var nueva_solicitud = document.getElementById("nueva_solicitud");
var nuevaSolicitud = nuevaSolicitud();
var checkbox = document.querySelectorAll('input[type=checkbox]'); 
var eliminarSolicitud = document.getElementById("eliminar_solicitud");
var botonEnviar = document.getElementById("enviar");
var menu = document.querySelector(".menuDesplegable");


function  habilitarMenu()
{
    menu.classList.toggle("menuDesplegable");;
}
function borrarTexto()
{
    texto = "";
}
function botonEliminar()
{
    var checkboxes = document.getElementsByName('check');
    for (let i = 0; i <  checkboxes.length; i++) {
        var filas = document.getElementsByName('filas');
        if(checkboxes[i].checked)
            {
                filas[i].remove();
            }
    }
}
//TODO:Podria hace otro funcion en la que desactivo en darle al boton enviar, el menu(pasale al boton la
//funcion con onClick="desde el html")
 function modificarSolicitudes()
{
    var descripcion = document.getElementsByName('descripcion');
    var checkboxes = document.getElementsByName('check');
    for (let i = 0; i <  checkboxes.length; i++) {
        if(checkboxes[i].checked)
            {
                var textoViejo = descripcion[i].value;
                    descripcion[i].innerHTML=`${document.querySelector("textarea").value}`
                        if(textoViejo!==descripcion[i]){habilitarMenu()}
            }
    }
}

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
    for (let valor of datos) {
        datosFrontEnd.innerHTML +=
        `
        <tr id="${contadorTr} "name="filas">
            <th class="descripcion"  name="descripcion">${valor.Descripción}</th>
            <th>${valor.Estado}</th>
            <th>${valor.Fecha}</th>
            <th><input type="checkbox"  name="check" onclick="onlyOne(this)"></th>
         </tr>  
        `
        contadorTr++;
    }
}
