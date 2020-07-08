const sounds = document.querySelectorAll(".sound");
const pads = document.querySelectorAll(".pads div");

pads.forEach((pads, index) => {
  pads.addEventListener("click", () => {
    sounds[index].currentTime = 0;
    sounds[index].play();
  });
});

document.addEventListener("keydown", (e) => {
  //   console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  //   console.log(audio);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
});
