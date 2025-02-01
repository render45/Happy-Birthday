window.onload = function() {
    const celebrationOverlay = document.getElementById('celebration-overlay');
    celebrationOverlay.style.display = 'flex';

    // Confetti
    const confettiSettings = {
        particleCount: 150,
        spread: 100,
        origin: { y: 0.8 },
    };

    confetti(confettiSettings);

    // Sound effect
    const audio = new Audio('happy_birthday.mp3'); // Place audio file in the same directory
    audio.play();

    // Hide after animation finishes
     setTimeout(function(){
          celebrationOverlay.remove();

     },5000);
};