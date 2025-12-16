const celebrateButton = document.getElementById('celebration-btn');
const gifs = document.getElementById('gifs')
const music = new Audio('../src/audio/musica.mp3')
const celebration = new Audio('../src/audio/fiesta.mp3');

celebrateButton.addEventListener('click', () => {
    celebration.play()
    celebration.volume = 0.3;
    gifs.classList.add('active');
})

