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
    let array = [];
    while(count <= n){
        array.push(count);
        count++
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