// var f = new Date();
// document.write(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
var datosFrontEnd = document.querySelector("#datos_atraer");

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
