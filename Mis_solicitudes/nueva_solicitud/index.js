var hora = document.getElementById("fecha");
function showTime(){
    myDate = new Date();
    dia = myDate.getDate();
    mes = myDate.getMonth()+1;
    año = myDate.getFullYear();
    if (dia < 10) dia = 0 + dia;
    if (mes < 10) mes = "0" + mes;
    if (año < 10) año = "0" + año;
    hora.innerHTML =`${dia}/${mes}/${año}`;
    setTimeout("showTime()", 5000);
    
}
showTime();
