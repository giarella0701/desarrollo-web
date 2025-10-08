function cambiarVideo(clickedVideo) {
    let videoMain = document.getElementById("video_main");
    let videoTitle = document.getElementById("video-title");

    // Guardar datos del video principal
    let mainSrc = videoMain.src;
    let mainTitle = videoTitle.textContent;

    // Datos del clicado
    let clickedSrc = clickedVideo.src;
    let clickedTitle = clickedVideo.getAttribute("data-title");

    // Cambiar el principal por el clicado
    videoMain.src = clickedSrc;
    videoMain.play();
    videoTitle.textContent = clickedTitle;

    // Intercambiar el src y data-title en la miniatura clicada
    clickedVideo.src = mainSrc;
    clickedVideo.setAttribute("data-title", mainTitle);

    // También actualizar el texto que aparece debajo
    let span = clickedVideo.parentElement.querySelector('.video-title');
    if (span) {
        span.textContent = mainTitle;
    }
}