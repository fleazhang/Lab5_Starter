// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectHorn = document.getElementById("horn-select");
  const images = document.querySelectorAll("img");
  const img1 = images[0]
  const audio = document.querySelector(".hidden");
  const playButton = document.querySelector("button");
  const jsConfetti = new JSConfetti();

  const adjustAudio = document.getElementById("volume-controls");
  const sound = document.getElementById("volume");
  const img2 = document.querySelector("#volume-controls img")
  

  selectHorn.addEventListener("change", function () {
    if(selectHorn.value === "air-horn") {
      img1.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    } else if(selectHorn.value === "car-horn") {
      img1.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    } else if(selectHorn.value === "party-horn") {
      img1.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";      
    }
  }); 

  adjustAudio.addEventListener("input", function () {
    let volumeValue = Number(sound.value);

    if(volumeValue === 0) {
      img2.src  = "assets/icons/volume-level-0.svg";
      audio.volume = volumeValue/100;
    }else if (0 < volumeValue && volumeValue < 33) {
      img2.src  = "assets/icons/volume-level-1.svg";
      audio.volume = volumeValue/100;
    }else if (33 <= volumeValue  && volumeValue < 67) {
      img2.src  = "assets/icons/volume-level-2.svg";
      audio.volume = volumeValue/100;
    }else if (67 <= volumeValue) {
      img2.src  = "assets/icons/volume-level-3.svg";
      audio.volume = volumeValue/100;
    }
  });


  playButton.addEventListener("click", function () {
    audio.play();
    if(selectHorn.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });

}