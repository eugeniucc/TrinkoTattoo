const duckAudio = new Audio("./sounds/duck.mp3");

document.getElementById("duck-sound-onclick").addEventListener("click", () => {
  duckAudio.play();
});
