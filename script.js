const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const video = document.getElementById("vid");
const finalScreen = document.getElementById("finalScreen");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let yesScale = 1;
let musicPlaying = false;

// Music toggle
musicBtn.onclick = () => {
  musicPlaying ? music.pause() : music.play();
  musicBtn.textContent = musicPlaying ? "🔊" : "🔇";
  musicPlaying = !musicPlaying;
};

// Random NO position (screen-safe)
function randomPosition(btn) {
  const rect = btn.getBoundingClientRect();
  const maxX = window.innerWidth - rect.width;
  const maxY = window.innerHeight - rect.height;

  btn.style.left = Math.random() * maxX + "px";
  btn.style.top = Math.random() * maxY + "px";
}

// Sad emojis
function sadEmojis() {
  const end = Date.now() + 10000;
  const interval = setInterval(() => {
    if (Date.now() > end) return clearInterval(interval);
    spawnEmoji("🙁");
  }, 300);
}

// Heart rain
function heartRain() {
  const interval = setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 200);

  setTimeout(() => clearInterval(interval), 10000);
}

// Emoji spawner
function spawnEmoji(char) {
  const emoji = document.createElement("div");
  emoji.className = "emoji";
  emoji.textContent = char;
  emoji.style.left = Math.random() * window.innerWidth + "px";
  emoji.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(emoji);
  setTimeout(() => emoji.remove(), 3000);
}

// NO click
noBtn.onclick = () => {
  randomPosition(noBtn);
  yesScale += 0.15;
  yesBtn.style.transform = `translateX(-50%) scale(${yesScale})`;
  video.src = "sadcat.mp4";
  sadEmojis();
  document.body.classList.add("shake");
  setTimeout(() => document.body.classList.remove("shake"), 300);
};

// YES click
yesBtn.onclick = () => {
  video.src = "ihh.mp4";
  heartRain();
  for (let i = 0; i < 20; i++) spawnEmoji("💋");
  setTimeout(() => finalScreen.style.display = "flex", 1200);
};
    
