// var f = new Date();
// document.write(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
var datosFrontEnd = document.querySelector("#datos_atraer");
var nueva_solicitud = document.getElementById("nueva_solicitud");
var nuevaSolicitud = nuevaSolicitud();
var checkbox = document.querySelectorAll('input[type=checkbox]'); 
var eliminarSolicitud = document.getElementById("eliminar_solicitud");
var botonEnviar = document.getElementById("enviar");
var menu = document.querySelector(".menuDesplegable");

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
 function modificarSolicitudes()
{
    var checkboxes = document.getElementsByName('check');
    for (let i = 0; i <  checkboxes.length; i++) {
        var descripcion = document.getElementsByName('descripcion');
        if(checkboxes[i].checked)
            {
                menu.classList.toggle("menuDesplegable")
                let texto = document.getElementById("textoSolicitud").value;
                botonEnviar.addEventListener("click", 
                function(){ 
                    {(descripcion[i].innerHTML=`${texto}`)} 
                    menu.classList.toggle("menuDesplegable")})
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
