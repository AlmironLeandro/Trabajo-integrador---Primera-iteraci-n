function validar(){
     
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;
    var soloDigitos = /[0-9]+/;
    var caracteres = /[a-zA-Z]+/;
    
    if(usuario.nodeValue ===""|| contraseña ===""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (!soloDigitos.test(usuario)){
        alert("El usuario tiene que contener digitos unicamente");
        return false;
    }
    else if (contraseña.length < 6){
        alert("La contraseña tiene que tener al menos 6 caractes");
        return false;
    }
    else if (!(caracteres.test(contraseña) && soloDigitos.test(contraseña))){
        alert("La contraseña tiene que contener una letra y un numero");
        return false;
    }
    else if (usuario.length < 8){
        alert("El usuario debe ser un Dni('8 digitos)");
        return false;
    }
//ToDo podrias reemplazar la linea 29 por una funcion que te devuelva validar() y te retorne mis solicitudes.
    return document.getElementById("myForm").action = "Mis_solicitudes/index.html";
}

