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
