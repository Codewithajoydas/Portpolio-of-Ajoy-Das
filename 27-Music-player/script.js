let audio = document.getElementById("a");
let playBtn = document.getElementById("play");
let timeLabel = document.getElementById("time");
let totalTimeLabel = document.getElementById("tTime");
let progress = document.getElementById("progress");
let coverImg = document.getElementById("cover");
let title = document.getElementById("title");
const playlist = [
  {
    src: "song1.mp3",
    name: "Aig kal Ai Aile",
    img: "https://aimlyrics.com/wp-content/uploads/2022/04/maxresdefault-2022-04-04T121440.294.jpg?v=1649052903",
  },
  {
    src: "song2.mp3",
    name: "Rang-Rangiya",
    img: "https://www.hinditracks.in/wp-content/uploads/2025/04/Rang-Rangiya-Lyrics-in-Hindi.jpg",
  },
];

let currentIndex = 0;

function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

function loadSong(index) {
  audio.src = playlist[index].src;
  coverImg.src = playlist[index].img;
  audio.load();
  audio.play();
  playBtn.querySelector("i").classList.replace("bi-play-fill", "bi-pause-fill");
  title.innerText = playlist[index].name;
}

audio.addEventListener("loadedmetadata", () => {
  totalTimeLabel.textContent = formatTime(audio.duration);
  progress.max = Math.floor(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  timeLabel.textContent = formatTime(audio.currentTime);
  progress.value = Math.floor(audio.currentTime);
});

audio.addEventListener("ended", () => {
  currentIndex = (currentIndex + 1) % playlist.length;

  loadSong(currentIndex);
});

progress.addEventListener("input", () => {
  audio.currentTime = progress.value;
});

playBtn.addEventListener("click", () => {
  const icon = playBtn.querySelector("i");
  if (audio.paused) {
    audio.play();
    icon.classList.replace("bi-play-fill", "bi-pause-fill");
  } else {
    audio.pause();
    icon.classList.replace("bi-pause-fill", "bi-play-fill");
  }
});

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % playlist.length;
  loadSong(currentIndex);
});

document.getElementById("previous").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
  loadSong(currentIndex);
});

// Load the first song initially
loadSong(currentIndex);
