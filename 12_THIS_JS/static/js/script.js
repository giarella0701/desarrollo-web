//Crear funcion de prueba This
function example(elemento){
    console.log("Elemento clickeado", elemento);
}

//Creacion de funcion TurnOff
function turnOff(element){
    if (element.innerText == "On" ){
        element.innerText = "Off";
    }else{
        element.innerText = "On"
    }
}

//Funcion para elñiminar botn

function hide(elemet){
    elemet.remove();
}