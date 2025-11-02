const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const music = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {
  intro.style.opacity = "0";
  intro.style.pointerEvents = "none";
  document.body.style.overflowY = "scroll";

  setTimeout(() => {
    intro.style.display = "none";
  }, 800);

  music.play();
});
