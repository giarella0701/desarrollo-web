//
// Archivo: script.js
// Propósito: Funciones de interactividad y manipulación del DOM
//

// Obtener el color de acento del CSS para usarlo en JS
const colorAcento = '#d8a7a7'; 
const colorFondoOriginal = '#fefcf7';

// Estas funciones estaban destinadas a las tarjetas de proyecto (Portafolio),
// pero se mantienen para el cumplimiento de los requisitos de JS si fuesen necesarios más adelante.

/**
 * Efecto onmouseover/hover con JS usando 'this'.
 * @param {HTMLElement} elemento - El elemento que disparó el evento.
 */
function resaltarElemento(elemento) {
    elemento.style.border = `2px solid ${colorAcento}`; 
    elemento.style.boxShadow = `0 0 15px rgba(216, 167, 167, 0.7)`;
}

/**
 * Evento onmouseout para restaurar el estado.
 * @param {HTMLElement} elemento - El elemento que disparó el evento.
 */
function restaurarElemento(elemento) {
    elemento.style.border = 'none';
    elemento.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.05)';
}

/**
 * Evento onchange usando 'this' para cambiar estilos.
 * @param {HTMLSelectElement} select - El elemento select que disparó el evento.
 */
function aplicarCambio(select) {
    const nuevoValor = select.value;
    const body = document.body;

    if (nuevoValor === 'azul') {
        body.style.backgroundColor = '#e6f7ff';
        body.style.color = '#0056b3';
    } else if (nuevoValor === 'rojo') {
        body.style.backgroundColor = '#fce8e8';
        body.style.color = '#cc0000';
    } else {
        body.style.backgroundColor = colorFondoOriginal; 
        body.style.color = '#3d3434';
    }

    select.style.borderColor = (nuevoValor !== 'default') ? 'green' : '';
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("El código JavaScript ha cargado sin errores. Giarella Avello.");
});