window.addEventListener('DOMContentLoaded', initialize);

function initialize() {
  const selector = document.getElementById('horn-select');
  const volumeControl = document.getElementById('volume');
  const volumeIndicator = document.querySelector('#volume-controls img');
  const triggerButton = document.querySelector('button');
  const player = document.querySelector('audio');

  const hornSounds = {
    'air-horn': { image: 'assets/images/air-horn.svg', sound: 'assets/audio/air-horn.mp3'},
    'car-horn': { image: 'assets/images/car-horn.svg', sound: 'assets/audio/car-horn.mp3'},
    'party-horn': { image: 'assets/images/party-horn.svg', sound: 'assets/audio/party-horn.mp3'}
  };

  selector.addEventListener('change', () => {
      const selection = hornSounds[selector.value];
      const displayImage = document.querySelector('#expose img');
      displayImage.src = selection.image;
      player.src = selection.sound;
  });

  volumeControl.addEventListener('input', () => {
    const level = volumeControl.value;
    if (level == 0) {
      volumeIndicator.src = 'assets/icons/volume-level-0.svg';
    } else if (level < 33) {
      volumeIndicator.src = 'assets/icons/volume-level-1.svg';
    } else if (level < 67) {
      volumeIndicator.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIndicator.src = 'assets/icons/volume-level-3.svg';
    }
    player.volume = level / 100;
  });

  triggerButton.addEventListener('click', () => {
    player.play();

    if (selector.value === 'party-horn') {
      const confetti = new JSConfetti();
      confetti.addConfetti({
        confettiNumber: 101,
        confettiRadius: 7,
        confettiColors: ['#fcf503', '#63fc03', '#f4fc02'],
        emojiSize: 90,
        emojis: [ '🎊', '🎈']
      });
    }
  });
}
