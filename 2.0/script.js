console.log("Funcionando correctamente");

//Ejercicio 1
let listacompras = [];

function agregarelemetocompra() {
    let elemento = document.getElementById("lista").value; //llama el elemento por su id "get.ElemetById"

    // Agregar a la lista de compras
    listacompras.push(elemento);

    // Crear un nuevo <li> y agregarlo al <p id="resultado">

    let silenhill = document.createElement("li");
    silenhill.innerText = elemento;

    let resultado = document.getElementById("resultado");
    resultado.appendChild(silenhill);

    // Mostrar en consola
    console.log(elemento);
}

//Ejercicio 2
function quitar_ultimo(){
let comprar = ["pan","leche","huevos"]
    let eliminar = comprar.pop();

    alert("Producto eliminado: " + eliminar);
}

//Ejercicio 3
function agregar_color(){
    let colores = ["rojo", "azul"];

colores.unshift("amarillo");
alert("Colores: " + colores.join(" - "))
}

//Ejercicio 4
function quitar_color(){
let colores = ["amarillo","rojo", "azul"];
let eliminado = colores.shift();

alert("Color eliminado: " + eliminado);
}

//Ejercicio 5
function combinar(){
    let numeros = [ 10, 20, 30];

    numeros.push(40);
    numeros.shift();
    numeros.unshift(5);
    numeros.pop();

    alert("Arreglo final: " + numeros.join(" - "));
}