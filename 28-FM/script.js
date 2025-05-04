let allStations = [];
let currentIndex = 0;
const chunkSize = 30;
let isLoading = false;

function fetchStations() {
  const country = document.getElementById("countryFilter").value;
  const language = document.getElementById("languageFilter").value;
  const list = document.getElementById("stationList");
  list.innerHTML = "Loading...";

  let url;
  if (!country && !language) {
    url = "https://de1.api.radio-browser.info/json/stations/topclick/1000";
  } else {
    url =
      "https://de1.api.radio-browser.info/json/stations/search?hidebroken=true";
    if (country) url += `&country=${encodeURIComponent(country)}`;
    if (language) url += `&language=${encodeURIComponent(language)}`;
  }

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      allStations = data.slice(0, 3000); // limit to 3000
      currentIndex = 0;
      list.innerHTML = "";
      loadNextChunk();
    })
    .catch((err) => {
      list.innerHTML = "<li>Error loading stations.</li>";
      console.error(err);
    });
}

function loadNextChunk() {
  if (isLoading) return;
  isLoading = true;

  const list = document.getElementById("stationList");
  const player = document.getElementById("player");
  const thamnail = document.getElementById("thamnail");
  const title = document.getElementById("title");
  const mainPlayBtn = document.getElementById("mainPlayBtn");

  let currentBtn = null;
  let currentStation = player.src;

  const end = Math.min(currentIndex + chunkSize, allStations.length);
  for (let i = currentIndex; i < end; i++) {
    const station = allStations[i];
    const li = document.createElement("li");

    const img = document.createElement("img");
    img.src = station.favicon || "https://placehold.co/30x30";
    img.alt = station.name;
    img.style.width = "60px";
    img.style.height = "60px";
    img.style.marginRight = "8px";

    const btn = document.createElement("button");
    const icon = document.createElement("i");
    icon.className = "bi bi-play-fill";
    btn.appendChild(icon);

    btn.onclick = () => {
      const isSameStation = currentStation === station.url;

      if (isSameStation && !player.paused) {
        player.pause();
      } else {
        if (currentBtn && currentBtn !== btn) {
          currentBtn.querySelector("i").className = "bi bi-play-fill";
        }

        player.src = station.url;
        player.play();

        thamnail.src = station.favicon || "https://placehold.co/30x30";
        thamnail.style.width = "40px";
        thamnail.style.height = "40px";
        title.innerText = station.name;

        icon.className = "bi bi-pause-fill";
        currentBtn = btn;
        currentStation = station.url;
      }
    };

    li.appendChild(img);
    li.appendChild(btn);
    list.appendChild(li);
  }

  currentIndex = end;
  isLoading = false;
}

// Handle scroll to load more
document.getElementById("stationList").addEventListener("scroll", () => {
  const list = document.getElementById("stationList");
  if (list.scrollTop + list.clientHeight >= list.scrollHeight - 50) {
    loadNextChunk();
  }
});

// Keep play/pause buttons in sync
document.getElementById("player").addEventListener("pause", () => {
  const mainPlayBtn = document.getElementById("mainPlayBtn");
  mainPlayBtn.className = "bi bi-play-fill";
});

document.getElementById("player").addEventListener("play", () => {
  const mainPlayBtn = document.getElementById("mainPlayBtn");
  mainPlayBtn.className = "bi bi-pause-fill";
});

// Global play/pause button
document.getElementById("mainPlayBtn").onclick = () => {
  const player = document.getElementById("player");
  if (!player.src) return;

  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
};

fetchStations();
