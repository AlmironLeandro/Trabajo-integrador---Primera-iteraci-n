

var datosFrontEnd = document.querySelector("#datos_atraer_usuarios");
var nuevo_usuario = document.getElementById("nuevo_usuario");
var checkbox = document.querySelectorAll('input[type=checkbox]'); 
var eliminarSolicitud = document.getElementById("eliminar_usuario");
var botonEnviar = document.getElementById("enviar");
var menu = document.querySelector(".menuDesplegableUsuario");
var habilitarMenuNuevaSolicitudes = document.querySelector(".isNuevoUsuario"); 
var misImagenes= new Array(3)
    misImagenes [0]= "../imagenes/avatars/1.png";
    misImagenes [1]= "../imagenes/avatars/2.png";
    misImagenes [2]= "../imagenes/avatars/3.png";
    misImagenes [3]= "../imagenes/avatars/4.png";
    misImagenes [4]= "../imagenes/avatars/5.png";
    misImagenes [5]= "../imagenes/avatars/6.png";
    misImagenes [6]= "../imagenes/avatars/7.png";
    misImagenes [7]= "../imagenes/avatars/8.png";
    misImagenes [8]= "../imagenes/avatars/9.png";
    misImagenes [9]= "../imagenes/avatars/10.png";
    misImagenes [10]= "../imagenes/avatars/11.png";
    misImagenes [11]= "../imagenes/avatars/12.png";
    misImagenes [12]= "../imagenes/avatars/13.png";
    misImagenes [13]= "../imagenes/avatars/14.png";
    misImagenes [14]= "../imagenes/avatars/15.png";
    misImagenes [15]= "../imagenes/avatars/16.png";


function salir()

{

    window.location.href = "../index.html";
}
function habilitarMenuNuevaSolicitud()
{
    habilitarMenuNuevaSolicitudes.classList.toggle("isNuevoUsuario");
    habilitarMenuNuevaSolicitudes.classList.toggle("prueba");
}
function nuevaSolicitud()
{
    
    var numeroDeFilas = document.getElementsByName('descripcion').length;
    datosFrontEnd.innerHTML +=
    `
    <tr id="${document.getElementsByName('descripcion').length} "name="filas">
        <th><img width="40" height="40" src="${misImagenes[Math.round(Math.random()*16)]}"></img></th>
        <th class="descripcion"  name="descripcion">${document.querySelector("#textoNuevoUsuario").value}</th>
        <th>${false}</th>
        <th><input type="checkbox"  name="check" onclick="onlyOne(this)"></th>
     </tr>  
    `;
        if(document.getElementsByName('descripcion').length!==numeroDeFilas)
        {borrarTexto("#textoNuevoUsuario");habilitarMenuNuevaSolicitud()}
    
}

function  habilitarMenu()
{
    menu.classList.toggle("menuDesplegableUsuario");
    menu.classList.toggle("prueba");
}
function borrarTexto(id)
{
    document.querySelector(id).value = ``
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
 function modificarSolicitudes()
{
    
    var descripcion = document.getElementsByName('descripcion');
    var checkboxes = document.getElementsByName('check');
    for (let i = 0; i <  checkboxes.length; i++) {
        if(checkboxes[i].checked)
            {
                var textoViejo = descripcion[i].value;
                    descripcion[i].innerHTML=`${document.querySelector("#textoSolicitud").value}`
                        if(textoViejo!==descripcion[i]){borrarTexto("#textoSolicitud");habilitarMenu();}
            }
    }
}

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
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
            <th  ><img width="40" height="40" src="${misImagenes[Math.round(Math.random()*16)]}"></svg></th>
            <th class="descripcion" name="descripcion">${valor.Nombre}</th>
            <th>${valor.Activo}</th>
            <th><input type="checkbox"  name="check" onclick="onlyOne(this)"></th>
         </tr>  
        `
        contadorTr++;
    }
}
