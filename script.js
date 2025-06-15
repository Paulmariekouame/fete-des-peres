  const sparklesContainer = document.querySelector('.sparkles');
    const sparkleCount = 6;
    for(let i=0; i<sparkleCount; i++){
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      sparkle.style.top = `${Math.random()*50 + 10}px`;
      sparkle.style.left = `${Math.random()*100}%`;
      sparkle.style.animationDelay = `${Math.random()*3}s`;
      sparkle.style.width = sparkle.style.height = `${10 + Math.random()*6}px`;
      sparklesContainer.appendChild(sparkle);
    }
    const bubblesContainer = document.querySelector('.floating-bubbles');
    const bubblesPositions = [8,20,32,47,58,67,80,91];
    bubblesPositions.forEach((pos, idx)=>{
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      bubble.classList.add(idx%3 === 0 ? 'large' : idx%3 === 1 ? 'medium' : 'small');
      bubble.style.left = pos + '%';
      bubble.style.animationDuration = 15 + Math.random()*8 + 's';
      bubble.style.animationDelay = Math.random()*10 + 's';
      bubblesContainer.appendChild(bubble);
    });
    function createConfetti() {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.classList.add(Math.random() > 0.5 ? 'small' : 'large');
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.top = '-20px';
      confetti.style.animationDuration = 5 + Math.random() * 3 + 's';
      confetti.style.animationName = 'confettiFall';
      confetti.style.opacity = 0.8 + Math.random()*0.2;
      document.body.appendChild(confetti);
      confetti.addEventListener('animationend', () => confetti.remove());
    }
    setInterval(createConfetti, 300);
    const button = document.querySelector('.music-control-btn');
    const icon = document.querySelector('#player-icon');
    const audio = document.getElementById('background-music');
    let isPlaying = false;
    button.addEventListener('click', () => {
      if(isPlaying){
        audio.pause();
        isPlaying = false;
        button.setAttribute('aria-pressed', 'false');
        button.title = "Activer la musique de fond";
        icon.innerHTML = '<path d="M7 9v6l5-3z"></path><path d="M0 0h24v24H0z" fill="none"></path>';
      } else {
        audio.play().catch(e => {
          console.warn("Erreur lecture audio :", e);
          alert("Cliquez sur le bouton pour lancer la musique.");
        });
        isPlaying = true;
        button.setAttribute('aria-pressed', 'true');
        button.title = "Désactiver la musique de fond";
        icon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path><path d="M0 0h24v24H0z" fill="none"></path>';
      }
    });