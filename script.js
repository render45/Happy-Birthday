window.onload = function() {
    const celebrationOverlay = document.getElementById('celebration-overlay');
        celebrationOverlay.style.display = 'flex';

      // Confetti
        const confettiSettings = {
            particleCount: 150,
            spread: 100,
             startVelocity: 50,
            origin: { y: 0.7 },
             colors: ['#ffb6c1', '#ff768e', '#ff4a6c', '#ff1e4a'],
             shapes: ['heart', 'circle'],
        };
    confetti(confettiSettings);

        // Sound effect
        const audio = new Audio('happy_birthday.mp3');
        audio.play();

        // Creating dynamic hearts in the overlay for a romantic feel
            for (let i = 0; i < 5; i++) { // Creating multiple heart elements with different positions
                const heart = document.createElement('div');
                 const randomLeft = Math.random() * 100;
                 const randomTop = Math.random() * 100;

                heart.classList.add('heart-background');
                heart.style.left = `${randomLeft}vw`; // Use vw units
                 heart.style.top = `${randomTop}vh`;// Use vh units

                celebrationOverlay.appendChild(heart);
            }

       setTimeout(function(){
        celebrationOverlay.remove();

         },5000);
};