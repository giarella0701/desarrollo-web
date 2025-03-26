console.log("Funcionando correctamente");

function botonparImpar(){  //ejercicio 14
    let numero = parseInt(prompt("Ingresar cualquier numero:"));
    if(numero % 2 == 0){
        alert("El numero es par");
    } else{
        alert("El numero es impar");
    }
}

function calculaMasa(){  //ejercicio 15
    let peso = parseFloat(prompt("Ingresa tu peso (en Kg):"));
    let altura = parseFloat(prompt("Ingrsa tu altura (en cm):"));
    altura = altura / 100;
    let imc = peso / (altura + altura);
    if(imc < 18.5){
        alert("Bajo peso");
    } else if (imc >= 18.5 && imc <= 24.9){
        alert("Peso normal")
    }else{
        alert("Sobrepeso")
    } 
}

function calculaNotas(){  //ejercicio 16
    let nota1 = parseFloat(prompt("Ingresa tu primera nota:"));
    let nota2 = parseFloat(prompt("Ingresa tu segunda nota:"));
    let nota3 = parseFloat(prompt("Ingresa tu tercera nota:"));
    let calculaNotas = (nota1 + nota2 + nota3) / 3;
    if(calculaNotas < 4.0){
        alert("Reprobado");
    } else{
        alert("Aprovado")
    }

}