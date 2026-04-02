let player;

// Se ejecuta cuando la API de YouTube está lista
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: '3l6Bi1HEC6I',
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'loop': 1,
            'playlist': '3l6Bi1HEC6I',
            'origin': window.location.origin // Soluciona el SecurityError
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    console.log("Música de YouTube lista para sonar.");
}

function comenzarExperiencia() {
    const overlay = document.getElementById('overlay');
    const contenido = document.getElementById('contenido-principal');

    overlay.style.opacity = '0';
    
    setTimeout(() => {
        overlay.classList.add('hidden');
        contenido.classList.remove('hidden');
        
        // Reproducir música (solo funciona tras clic del usuario)
        if (player && player.playVideo) {
            player.playVideo();
            player.setVolume(50);
        }
    }, 800);
}

function gestionarGiro(cardElement, soundId) {
    cardElement.classList.toggle('is-flipped');
    const efecto = document.getElementById(soundId);
    
    if (efecto) {
        efecto.currentTime = 0;
        efecto.play().catch(() => {}); 
    }

    if (cardElement.classList.contains('is-flipped')) {
        confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.8 },
            colors: ['#ff4081', '#ffffff', '#ffd700']
        });
    }
}