const sounds = document.querySelectorAll(".sound");
const pads = document.querySelectorAll(".pads div");

pads.forEach((pad, index) => {
  pad.addEventListener("click", () => {
    sounds[index].currentTime = 0;
    sounds[index].play();
    pad.classList.add("play");
  });
});

document.addEventListener("keydown", (e) => {
  //   console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.pad[data-key='${e.keyCode}']`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  //
  key.classList.add("play");
  pads.forEach((pad) => {
    pad.addEventListener("click");
    console.log(pad);
    pad.classList.add("play");
  });
});
