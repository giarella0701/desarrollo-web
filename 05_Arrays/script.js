console.log("Funcionando correctamente");

function Suma_indices(){
    let array = [1,2,3,4,5,6,7];
    let suma = array[0] + array[1] + array[2] + array[3] + array[4] + array[5] + array[6];
    alert(`El arreglo es ${array.join(" - ")}: \n Resultado: ${suma} `);
}


function Producto_pares(){
    let arreglo = [2,4,6,8,10,12];
    let producto = arreglo[0] * arreglo[1] * arreglo[2] * arreglo[4] * arreglo[5];
    alert(`El array es: ${arreglo.join(" - ")} \nEl producto de los valores pares es: ${producto}`);
}