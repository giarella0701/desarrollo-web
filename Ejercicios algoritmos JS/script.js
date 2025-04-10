function sumarNaturales(){

    let n = parseInt(prompt("Ingresa un número"));
    let suma = 0;
    let array = [];
    for (let i = 1; i <= n; i++) {
        let num = parseFloat(prompt(`Ingrese el número ${i} de ${n}: `));
        array.push(num);
        suma += num;
    }
    alert(`Números ingresados: ${array.join(" + ")}\nTotal = ${suma}`);
}

function primerosNumerosPares(){
    let n = parseFloat(prompt("Ingresa un número par: "));
    let array = [];
    for (let i = 1; i <= n; i++) {
        array.push(i * 2);
    }
    alert(`Los primeros ${n} números pares son:\n` + array.join(", "))
}

function primerosNumerosImpares(){
    let n = parseFloat(prompt("Ingresa un número: "));
    let array = [];
    for (let i = 1; i <= n; i++) {
        array.push(i * 2 + 1);
    }
    alert(`Los primeros ${n} números pares son:\n` + array.join(", "));
}

function Sumar5(){
    let suma = parseInt(prompt("Ingrese Cinco Números: "));
    let numeros = [];

    for (let i = 1; i <= 5; i++) {
        let num = parseFloat(prompt(`Ingresa el número ${i} de 5:`));
        numeros.push(num);
        suma += num;
    }

    alert(`Números ingresados: ${numeros.join(" + ")}\nSuma total = ${suma}`);
}

function SumarNnumeros(){
    let n = parseInt(prompt("¿Cuántos números quieres sumar?"));
    let suma = 0;
    let numeros = [];

    for (let i = 1; i <= n; i++) {
        let num = parseFloat(prompt(`Ingresa el número ${i} de ${n}:`));
        numeros.push(num);
        suma += num;
    }

    alert(`Números ingresados: ${numeros.join(" + ")}\nSuma total = ${suma}`);
}

function Funciones(){

}

function SumarNpares(){
        let n = parseInt(prompt("¿Cuántos números pares deseas sumar?"));
        let suma = 0;
        let numerosPares = []; 
    
        for (let i = 1; i <= n; i++) {
            let numero = parseFloat(prompt(`Ingresa el número ${i}:`));
            
            while (numero % 2 !== 0) {
                numero = parseFloat(prompt(`El número ingresado es impar. Por favor, ingresa un número par para el número ${i}:`));
            }
            
            suma += numero;
            numerosPares.push(numero); 
        }
    
        alert(`La suma total de los ${n} números pares es: ${suma}\nNúmeros ingresados: ${numerosPares.join(", ")}`);
    }

function SumarLosPrimerosPares(){
        let n = parseInt(prompt("¿Cuántos primeros números pares deseas sumar?"));
        
        while (isNaN(n) || n <= 0) {
            n = parseInt(prompt("¡Error! Debe ser un número mayor a 0. Intenta nuevamente:"));
        }
        let suma = 0;
        let numerosPares = []; 
        let numeroActual = 2;  

        for (let i = 0; i < n; i++) {
            suma += numeroActual;
            numerosPares.push(numeroActual); 
            numeroActual += 2; 
        }
    
        alert(`La suma de los primeros ${n} números pares es: ${suma}\nNúmeros: ${numerosPares.join(", ")}`);
    }

function SumarImpares(){
    let n = parseInt(prompt("¿Cuántos números deseas sumar?")); 
    let array = []

    for (let i = 1; i <= n; i++) {
        let numero = parseFloat(prompt(`Ingresa el número ${i}:`));
        
        while (numero % 2 === 0) {
            numero = parseInt(prompt(`El número ingresado es par. Por favor, ingresa un número impar para el número ${i}:`));
        }
        suma += numero;
        resultado.push(i)
    }
    alert(`La suma total de los ${n} números impares es: ${suma}`);
} 

function SumarPrimerosImpares(){
        let n = parseInt(prompt("¿Cuántos primeros números impares deseas sumar?"));

        while (isNaN(n) || n <= 0) {
            n = parseInt(prompt("¡Error! Debe ser un número mayor a 0. Intenta nuevamente:"));
        }
    
        let suma = 0;
        let numerosImpares = []; 
        let numeroActual = 1

        for (let i = 0; i < n; i++) {
            suma += numeroActual;
            numerosImpares.push(numeroActual);
            numeroActual += 2; 
        }
    
        alert(`La suma de los primeros ${n} números impares es: ${suma}\nNúmeros: ${numerosImpares.join(", ")}`);
    }
    