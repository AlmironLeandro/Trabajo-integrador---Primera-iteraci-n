document.getElementById("myFormRegistration").onsubmit = function() {usuarioRegistrado()};
var usuarioGuardado =["leandro"]

function validarUsuario(){ 
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;
    var contraseñaRepeat = document.getElementById("contraseñaRepeat").value;
    var myFormRegistration = document.getElementById("myFormRegistration");
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
        else if (!(contraseña == contraseñaRepeat)){
            alert("La contraseñas no coinciden")
            return false;
        }
        else 
        {
            return true;
        }
}
function usuarioRegistrado()
{
    if(validarUsuario())
    {
        var usuario = document.getElementById("usuario").value;
        var contraseña = document.getElementById("contraseña").value;
        var usuarioCompleto = {usuario,contraseña}
       usuarioGuardado.push(usuarioCompleto.usuario,usuarioCompleto.contraseña)
                alert("Usuario creado!")
                alert(usuarioGuardado)
        //ToDo tenes que convertir los datos JavaScript en Json y hacer un push a un archivo Json, de esta forma 
        // vas a tener una "Base de datos en donde son alojados los usuarios para validar luego"
    }
}

