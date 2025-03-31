console.log("Funcionando correctamente...")

function bucleWhile(){
    let count = 10;
    let array = [];
    while(count >= 1){
        array.push(count);
        count --;
    }
    alert(`Los numeros son: ${array.join(" - ")}`);
}

function bucleF(){
    let array = [];
    for(i = 10; i >= 1; i -- ){
        array.push(i)
    }
    alert(`Los numeros son: ${array.join(" - ")}`);
}

function contarNumeros(){
    let n = parseInt(prompt("Ingrese un numero entero:"));
    let count = 1;
    let array = []; //lista vacia
    while(count <= n){
        array.push(count); //inserta valor al final del array
        count++ //incrementa 1 al contador
    }
    alert(`Contando: ${array.join(" - ")}`)
}

function disminuir(){
    let n = parseInt(prompt("Ingrese cualquier numero:"));
    let limite = 1;
    let array = []; //lista vacia
    while(limite <= n){
        array.push(n); //inserta valor al final del array
        n--; //disminuye 1 al contador
    }
    alert(`Contando: ${array.join(" - ")}`)
}


function sumarNumeros(){
    let suma = 0;
    let array = [];
    for( let i = 1; 1 <= 5; i++){
        suma+= i;
        array.push(i);
    }
    alert(suma);
}