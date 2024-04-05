const spreakerPlayer = document.querySelector('.spreaker-player');
const imagenReproductor = document.getElementById('imagenReproductor');

spreakerPlayer.addEventListener('loadeddata', () => {
    const spreakerIframe = spreakerPlayer.querySelector('iframe');
    const spreakerWindow = spreakerIframe.contentWindow;

    // Función para cambiar la imagen cuando el reproductor está en reproducción
    function cambiarImagenReproduccion() {
        imagenReproductor.src = 'Assets/img/live.png';
    }

    // Función para cambiar la imagen cuando el reproductor está en pausa
    function cambiarImagenPausa() {
        imagenReproductor.src = 'Assets/img/Offline.png';
    }

    // Detectar eventos de reproducción y pausa en el reproductor de Spreaker
    spreakerWindow.addEventListener('play', cambiarImagenReproduccion);
    spreakerWindow.addEventListener('pause', cambiarImagenPausa);
});
