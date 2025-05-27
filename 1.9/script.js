console.log("Funcionando bien")

//ejercicio 1
function mostrar(){
    let array = [];
    let nombre = "";

    while (nombre !== "salir"){
        nombre = prompt("Ingrese un nombre (o escriba ´salir´ para terminar): ");
        if (nombre !=="salir"){
            array.push(nombre);
        }
    }

    console.log("total de participantes" + array.length);
    console.log("lista: " + array.join(" - "));

    if (array.length > 5){
        console.log("¡Hay mas de 5 participantes!");
    }
}

//ejercicio 2
function simulador(){
    let array = ["pan" , "arroz" , "leche" , "azucar"];

    for( let i = 0; i < 5; i++) {
        if(array.length > 0){
            let vendido = array.pop();
            console.log("Producto vendido: " + vendido);
        } else {
            console.log("Sin stock: ")
        }
}
}