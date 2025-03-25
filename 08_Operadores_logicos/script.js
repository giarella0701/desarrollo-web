console.log("Funcionando correctamente");

function verificacionAcceso(){ //Ejercicio 6
    let edad = prompt("Ingresa tu edad:")
    let aceptaTerminos = ("¿Acepta terminos y condiciones?")

    if(edad >= 18 && aceptaTerminos){
        alert("Acceso permitido")
    } else {
        alert("Acceso denegado")
    }
    
}                

function descuento(){ //Ejercicio 7
    let edad = prompt("Ingresa tu edad:")
    let esEstudiante = prompt("Eres estudiate?")

    if( edad >= 60 || esEstudiante){
        alert("Descuento aplicado")
    } else{
        alert("No tienes descuento")
    }
}

function validacionUsuario(){//Ejercicio 8
    let usuario = prompt("Ingresa tu usuario:")
    let contraseña = prompt("Ingresa tu contraseña:")

    if (!usuario && !contraseña ){
        alert("Error: Debes ingresar usuario y contraseña")
    } else{
        alert("Inicio de sesión exitoso")
    }
}
function maquinaCondiciones(){ //Ejercicio 9
    let energiaSuficiente = prompt("Tiene energia suficiente?")
    let interruptorEncendido = prompt("Esta encendido el interruptor?")

    if (energiaSuficiente && interruptorEncendido){
        alert("Maquina encendida")
    } else{
        alert("No se puede encender la maquina")
    }

}


function estadoSeguridad(){ //Ejercicio 10
    let bloqueado 
    let tieneCredenciales 

}