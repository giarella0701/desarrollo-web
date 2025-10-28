//
// Archivo: script.js
// Propósito: Funciones de interactividad y manipulación del DOM
//

// Colores definidos para usar en JS, reflejando el CSS
const colorAcento = '#ac49b9'; // Púrpura suave (de --color-acento-principal)
const colorFondoOriginal = '#f5c9f1'; // Fondo principal (de --color-fondo-principal)


// ===================================
// ÍTEMS 8 y 9: onmouseover / onmouseout
// ===================================

/**
 * Efecto onmouseover/hover con JS usando 'this'.
 * Aplica un borde de acento y sombra (Ítem 8).
 * @param {HTMLElement} elemento - El elemento que disparó el evento.
 */
function resaltarElemento(elemento) {
    // Usamos 'this' (el elemento) para modificar su estilo
    elemento.style.border = `2px solid ${colorAcento}`; 
    elemento.style.boxShadow = `0 0 15px rgba(172, 73, 185, 0.7)`;
}

/**
 * Evento onmouseout para restaurar el estado.
 * Remueve el borde y la sombra aplicada por resaltarElemento (Ítem 9).
 * @param {HTMLElement} elemento - El elemento que disparó el evento.
 */
function restaurarElemento(elemento) {
    // Usamos 'this' (el elemento) para restaurar su estado original
    elemento.style.border = '1px solid rgba(0, 0, 0, 0.05)'; // Borde original de la tarjeta
    elemento.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.05)';
}

// ===================================
// ÍTEM 10: onclick
// ===================================

/**
 * Evento onclick usando 'this' para ejecutar acciones.
 * Alterna la visibilidad de un texto (Ítem 10).
 * @param {HTMLElement} elemento - El botón que disparó el evento.
 */
function alternarDetalles(elemento) {
    const texto = document.getElementById('textoInteractivo');
    
    // Si está oculto, lo muestra y cambia el texto del botón usando 'this'
    if (texto.style.display === 'none' || texto.style.display === '') {
        texto.style.display = 'block';
        elemento.textContent = 'Ocultar Texto (onclick)';
    } else {
        // Si está visible, lo oculta y restaura el texto del botón usando 'this'
        texto.style.display = 'none';
        elemento.textContent = 'Mostrar/Ocultar Texto (onclick)';
    }
}


// ===================================
// ÍTEM 11: onchange
// ===================================

/**
 * Evento onchange usando 'this' para capturar/modificar valores.
 * Cambia el estilo del fondo de la página basado en la selección (Ítem 11).
 * @param {HTMLSelectElement} select - El elemento select que disparó el evento.
 */
function aplicarCambio(select) {
    // Captura el valor del elemento seleccionado ('this')
    const nuevoValor = select.value;
    const body = document.body;

    // Lógica para modificar el estilo del DOM (body)
    if (nuevoValor === 'azul') {
        body.style.backgroundColor = '#e6f7ff';
        body.style.color = '#0056b3';
    } else if (nuevoValor === 'rojo') {
        body.style.backgroundColor = '#fce8e8';
        body.style.color = '#cc0000';
    } else {
        // Restaura al estado original
        body.style.backgroundColor = colorFondoOriginal; 
        body.style.color = '#161515'; // --color-texto-oscuro
    }

    // Cambia el borde del selector usando 'this'
    select.style.borderColor = (nuevoValor !== 'default') ? 'green' : '';
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("El código JavaScript ha cargado sin errores. Giarella Avello.");
});