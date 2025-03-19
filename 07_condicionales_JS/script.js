function evaluarTemperature(){
    let temperatura = parseInt(prompt("Ingresa la temperatura:"))

    if (temperatura < 10) {
        alert("Hace frio");
    } else if (temperatura >= 10 && temperatura <25) {
        alert("Temperatura agradable");
    } else {
        alert("Hace calor")
    }
}

function verificaUsuario(){
    let nombre = prompt("Ingresar Nombre:")
    let contraseña = prompt("Ingresa Contraseña:")

    if (nombre === "usuario123" && contraseña === "secreto"){
        alert("Acceso concedido")
    } else {
        alert("Acceso denegado")
    }
}

