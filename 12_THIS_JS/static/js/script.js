
function darMeGusta(elemento) {

    let contadorSpan = elemento.querySelector('span');
    let incrementarLikes = parseInt(contadorSpan.innerText);
    incrementarLikes = incrementarLikes + 1; 
    contadorSpan.innerText = incrementarLikes;
}


function iniciarSesion(elemento) {
    if (elemento.innerText === "Iniciar Sesión") {
        elemento.innerText = "Cerrar Sesión";
    } else {
        elemento.innerText = "Iniciar Sesión";
    }
}


function ocultar(elemento) {

    elemento.remove();
}