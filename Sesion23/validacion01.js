let formulario = document.getElementById("miFormulario");
let formulario2 = document.forms["miFormulario"];

let formulario3 = document.getElementsByTagName("form")[0];
let formulario4 = document.forms[0];


window.onload = iniciar;


function iniciar(){
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function validarNombre(){
    let elemento = document.getElementById("nombre");
    limpiarError(elemento);
    if (elemento.value == ""){
        alert("El campo no puede ser vacio");
        error(elemento);
        return false;
    }
    return true;
}

function validarTelefono(){
    let elemento = document.getElementById("telefono");
    if (isNaN(elemento.value)) {
        alert("El campo del telefono teiene que ser numerico");
        return false;
    }
    return true;
}

function validarCheck() {
    let campoCheck = document.getElementById("mayor");
    if (!campoCheck.checked) {
        alert ("Debe ser mayor de edad");
        return false;
    }
    return true;
}

function validar(e){
    if (validarNombre() && validarTelefono && validarCheck() && confirm("pulsa aceptar si deseas enviar el formulario")){
        return true;
    }else{
        e.preventDefault();
        return false
    }
}

function error(elemento) {
    elemento.className = "error";
    elemento.focus();
}

function limpiarError(elemento) {
    elemento.className = "";
}