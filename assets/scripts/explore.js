// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const playButton = document.querySelector("button");
  const textInput = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const img = document.querySelector("img");
  let voices = []

  function loadVoices() {
    voices = speechSynthesis.getVoices();
    const avail_voices = document.getElementById("voice-select");

    voices.forEach((voice, index) => {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index;
      avail_voices.appendChild(option);
    });
  }

  loadVoices();
  speechSynthesis.addEventListener("voiceschanged", loadVoices);

  playButton.addEventListener("click", function () {
    const speak = new SpeechSynthesisUtterance(textInput.value);
    const selectedVoice = voices[voiceSelect.value];

    if(selectedVoice) {
      speak.voice = selectedVoice;
    }

    speechSynthesis.speak(speak);

    const checkSpeaking = setInterval(() => {
      if (speechSynthesis.speaking) {
        img.src = "assets/images/smiling-open.png";
      } else {
        img.src = "assets/images/smiling.png";
        clearInterval(checkSpeaking);
      }

    }, 100);
    
  });


}