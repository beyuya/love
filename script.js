// Hilangin intro 4 detik
setTimeout(() => {
  document.getElementById("intro").style.display = "none";
}, 4000);


// FORCE autoplay audio via hidden video
document.addEventListener("DOMContentLoaded", () => {
  const v = document.getElementById("bgVideo");

  v.volume = 1;
  v.muted = false;

  function forcePlay(){
    v.muted = false;
    v.volume = 1;
    v.play().then(() => {
      console.log("✅ Autoplay success");
    }).catch(() => {
      console.log("❌ Still blocked... retrying");
    });
  }

  // Brute force try
  forcePlay();
  let interval = setInterval(forcePlay, 1200);

  // stop brute force kalau berhasil
  v.addEventListener("playing", () => {
    clearInterval(interval);
  });
});
