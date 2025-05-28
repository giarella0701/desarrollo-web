console.log("Funcionando")

function promedio (){
    let notas = [];
    for (let i = 0; i < 5; i++){
        let nota = parseFloat(prompt("Ingresa la nota: " + (i+1)));
        notas.push(nota);
    }
    let suma = 0;
    for(let i = 0; i < notas.length; i++){
        suma += notas[i];
    }
    let promedio = suma / notas.length;
    alert("El promedio es: " + promedio);

    if(promedio >= 4){
        alert("¡Aprovaste!");
        } else {
            alert("No aprovaste :(");
            }
        }
        
    function separar(){
        let numeros = []
        let pares = []
        let impares = []
        
        for(let i = 0; i < 6; i++){
            let numero = parseInt(prompt("Ingresa el numero: " + (i + 1)));
            numeros.push(numero);
        }
        
        for(let i = 0; i < numeros.length; i++){
            if(numeros[i] % 2 === 0 ){
                pares.push(numeros[i]);
            } else{
                impares.push(numeros[i])
            }
        }
        console.log("Numeros pares: ", pares);
        console.log("Numeros impares: ", impares)
    }
