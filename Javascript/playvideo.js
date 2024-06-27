document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('myVideo');

    //Defina o tempo especifico (em segundos)
    var startTime = 10; // Por exemplo, iniciar no 10º segundo

    // Garanta que o video comece do tempo especificado
    video.addEventListener('loadedmetadata', function() {
        video.currentTime = startTime;
    });

    // Opcional: iniciar o video automaticamente
    video.play();
});

    
    

