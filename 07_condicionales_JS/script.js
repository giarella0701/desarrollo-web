console.log("Funcionando correctamente");

function evaluarTemperature(){  //Ejercicio 2
    let temperatura = parseInt(prompt("Ingresa la temperatura:"))

    if (temperatura < 10) {
        alert("Hace frio");
    } else if (temperatura >= 10 && temperatura <25) {
        alert("Temperatura agradable");
    } else {
        alert("Hace calor")
    }
}

function verificaUsuario(){  //Ejercicio 3
    let nombre = prompt("Ingresar Nombre:")
    let contraseña = prompt("Ingresa Contraseña:")

    if (nombre === "usuario123" && contraseña === "secreto"){
        alert("Acceso concedido")
    } else {
        alert("Acceso denegado")
    }
}

//Ejercicio 4

//Ejercicio 5

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
}

function validacionUsuario(){//Ejercicio 8
    let usuario = prompt("Ingresa tu usuario:")
    let contraseña = prompt("Ingresa tu contraseña:")

}
//Ejercicio 9

//Ejercicio 10
