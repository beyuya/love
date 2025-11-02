// start + fade
const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const music = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {
  intro.style.opacity="0";
  intro.style.pointerEvents="none";
  document.body.style.overflowY="scroll";
  setTimeout(()=>{ intro.style.display="none"; },800);
  music.play();
});

// fade in images on scroll
const cards = document.querySelectorAll(".photo-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
},{ threshold:0.2 });

cards.forEach(card => observer.observe(card));

// floating hearts
setInterval(()=>{
  const heart=document.createElement("div");
  heart.className="heart";
  heart.textContent="❤";
  heart.style.left=Math.random()*100+"vw";
  heart.style.animationDuration=(3+Math.random()*2)+"s";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),5000);
},900);
