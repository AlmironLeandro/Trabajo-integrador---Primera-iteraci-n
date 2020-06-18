// var f = new Date();
// document.write(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
var datosFrontEnd = document.querySelector("#datos_atraer");
var nueva_solicitud = document.getElementById("nueva_solicitud");
var nuevaSolicitud = nuevaSolicitud();

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
    datosFrontEnd.innerHTML = ''
    for (let valor of datos) {
        datosFrontEnd.innerHTML +=
        `
        <tr>
            <th class="primer">${valor.Descripción}</th>
            <th>${valor.Estado}</th>
            <th>${valor.Fecha}</th>
         </tr>  
        
        `
    }
}
