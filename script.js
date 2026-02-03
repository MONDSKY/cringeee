const video = document.getElementById("mainVideo");
const bgMusic = document.getElementById("bgMusic");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const finalText = document.getElementById("finalText");

let yesScale = 1;
let noCount = 0;
let audioStarted = false;

const text = "Can you be my date? 😇";
let index = 0;

const yesTexts = [
  "Yes 💕",
  "Think again 😳",
  "Pls say yes 🥺",
  "pinduti na nganiiii",
  "YES!!!"
];

// Typing effect
function typeText() {
  if (index < text.length) {
    message.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 80);
  }
}
typeText();

// Enable sound (video + bg music)
function enableAudio() {
  if (!audioStarted) {
    video.play();
    fadeInMusic();
    audioStarted = true;
  }
  document.removeEventListener("click", enableAudio);
}
document.addEventListener("click", enableAudio);

// Fade-in background music
function fadeInMusic() {
  bgMusic.volume = 0;
  bgMusic.play();
  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.6) {
      vol += 0.02;
      bgMusic.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 150);
}

// NO button logic
noBtn.addEventListener("click", () => {
  enableAudio();
  noCount++;

  noBtn.style.left = Math.random() * 250 + "px";
  noBtn.style.top = Math.random() * 90 + "px";

  video.src = "sadcat.mp4";
  video.play();

  yesScale += 0.25;
  yesBtn.style.transform = `scale(${yesScale})`;
  yesBtn.textContent = yesTexts[noCount % yesTexts.length];

  spawnEmojis("🙁");
});

// YES button logic
yesBtn.addEventListener("click", () => {
  enableAudio();

  video.src = "angkol.mp4";
  video.play();

  finalText.classList.remove("hidden");
  message.style.display = "none";
  noBtn.style.display = "none";

  spawnEmojis("💋");
  spawnHearts();
});

// Emojis
function spawnEmojis(symbol) {
  const interval = setInterval(() => {
    const e = document.createElement("div");
    e.className = "emoji";
    e.textContent = symbol;
    e.style.left = Math.random() * window.innerWidth + "px";
    e.style.top = window.innerHeight - 50 + "px";
    document.body.appendChild(e);
    setTimeout(() => e.remove(), 3000);
  }, 300);

  setTimeout(() => clearInterval(interval), 10000);
}

// Floating hearts forever 💗
function spawnHearts() {
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "emoji";
    h.textContent = "💗";
    h.style.left = Math.random() * window.innerWidth + "px";
    h.style.top = window.innerHeight + "px";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 3000);
  }, 500);
}
