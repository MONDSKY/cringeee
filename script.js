const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const video = document.getElementById("vid");
const finalScreen = document.getElementById("finalScreen");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const yesTexts = [
  "Yes 💖",
  "Sure? 😏",
  "Come on 😌",
  "Just click me🥰",
  "You want this😳",
  "YES ALREADY😡"
];

let yesScale = 1;
let yesTextIndex = 0;
let musicPlaying = false;

/* Music toggle */
musicBtn.onclick = () => {
  musicPlaying ? music.pause() : music.play();
  musicBtn.textContent = musicPlaying ? "🔊" : "🔇";
  musicPlaying = !musicPlaying;
};

/* Emojis */
function spawnEmoji(char) {
  const e = document.createElement("div");
  e.className = "emoji";
  e.textContent = char;
  e.style.left = Math.random() * window.innerWidth + "px";
  e.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(e);
  setTimeout(() => e.remove(), 3000);
}

function sadEmojis() {
  const end = Date.now() + 10000;
  const interval = setInterval(() => {
    if (Date.now() > end) return clearInterval(interval);
    spawnEmoji("🙁");
  }, 300);
}

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

/* NO click */
noBtn.onclick = () => {
  const container = document.querySelector(".buttons");
  const c = container.getBoundingClientRect();
  const b = noBtn.getBoundingClientRect();

  noBtn.style.left = Math.random() * (c.width - b.width) + "px";
  noBtn.style.top = Math.random() * (c.height - b.height) + "px";

  yesScale += 0.15;
  yesBtn.style.transform = `translateX(-50%) scale(${yesScale})`;

  if (yesTextIndex < yesTexts.length - 1) {
    yesTextIndex++;
    yesBtn.textContent = yesTexts[yesTextIndex];
  }

  video.src = "sadcat.mp4";
  sadEmojis();

  document.body.classList.add("shake");
  setTimeout(() => document.body.classList.remove("shake"), 300);
};

/* YES click */
yesBtn.onclick = () => {
  video.src = "ihh.mp4";
  video.play();

  heartRain();
  for (let i = 0; i < 20; i++) spawnEmoji("💋");

  setTimeout(() => {
    finalScreen.style.display = "flex";
  }, 1200);
};
