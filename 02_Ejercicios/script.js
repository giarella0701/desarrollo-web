console.log("Vinculado correctamente...");
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables(){    // Tu código aquí
    let ahora = parseInt(prompt("Ingrese un año actual"));
    let fecha_nac = parseInt(prompt("Ingrese año nacimiento: "));
    let edad = ahora - fecha_nac;
    alert("Edad es: " + edad  + ".");

    }
    
    // Ejercicio 2: Asignación de valores
    // Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
    function asignarValores() {
    // Tu código aquí
        let var1 = prompt("Ingrese un valor:  ");
        let var2 = var1;

        alert ("El valor de var2 es: " + var2);
        
    }
    
    // Ejercicio 3: Operaciones matemáticas
    // Instrucciones: Completa la función para realizar las siguientes operaciones:
    // Suma 'num1','num2' y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
    // Muestra los resultados en un mensaje.
    function realizarOperaciones() {
    let num1 = parseInt(prompt("ingrese num1:  "));
    let num2 = parseInt(prompt("ingrese num2:  "));
    let num3 = parseInt(prompt("ingrese num3:  "));
        let suma = num1 + num2 + num3;
        let resta = num1 - num3;
        let multiplica = num2 * num3;
        let divide = num1 / 120;

    alert("Resultados:  \n Suma: " + suma + "\n Resta: " + resta + 
        "\n Multiplicacion:" + multiplica + "\n Division:" + divide  );
    
    // Tu código aquí
    }
    
    // Ejercicio 4: Manipulación de cadenas
    // Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_casa'.
    // Luego, muestra la longitud del mensaje y el antepenultimo en el mensaje. (.length)
    function manipularCadenas() {
 
    // Tu código aquí

    let direccion = prompt("Ingrese direccion: ");
    let nCasa = prompt("Ingrese numero de casa: ");
    let mensaje = direccion + " " + nCasa;

    alert("La direccion es: " + direccion +  "\n Cantidad de caracteres: " + mensaje.length +  "\n caracter antepenultimo: " + mensaje[mensaje.length - 3]);
    }