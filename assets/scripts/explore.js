window.addEventListener('DOMContentLoaded', initialize);

function initialize() {
  const speechInput = document.getElementById('text-to-speak');
  const voiceDropdown = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const expressionImage = document.querySelector('#explore img');

  function populateVoices() {
    const speechSystem = window.speechSynthesis;
    const availableVoices = speechSystem.getVoices();
    availableVoices.forEach((voice, idx) => {
      const voiceOption = document.createElement('option');
      voiceOption.value = idx;
      voiceOption.textContent = voice.name;
      voiceDropdown.appendChild(voiceOption);
    });
  }

  window.speechSynthesis.onvoiceschanged = populateVoices;

  speakButton.addEventListener('click', () => {
    const speechSynth = window.speechSynthesis;
    const chosenVoiceIndex = voiceDropdown.value;
    const chosenVoice = speechSynth.getVoices()[chosenVoiceIndex];
    const textToAnnounce = speechInput.value;

    if (textToAnnounce.trim() === '') {
      return;
    }

    const utterance = new SpeechSynthesisUtterance(textToAnnounce);
    utterance.voice = chosenVoice;
    utterance.onstart = () => {
      expressionImage.src = 'assets/images/smiling-open.png';
    };
    utterance.onend = () => {
      expressionImage.src = 'assets/images/smiling.png';
    };
    speechSynth.speak(utterance);
  });
}
