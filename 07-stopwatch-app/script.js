let ms = 0;
let sec = 0;
let min = 0;
let hr = 0;

let timerInterval = null;
let isRunning = false;

let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");
let timerDisplay = document.getElementById("timerDisplay");

let startTimer = () => {
  timerInterval = setInterval(() => {
    ms++;
    if (ms >= 100) {
      ms = 0;
      sec++;
    }
    if (sec >= 60) {
      sec = 0;
      min++;
    }
    if (min >= 60) {
      min = 0;
      hr++;
    }

    timerDisplay.innerHTML = `${hr.toString().padStart(2, "0")}:${min
      .toString()
      .padStart(2, "0")}:${sec.toString().padStart(2, "0")}:${ms
      .toString()
      .padStart(2, "0")}`;
  }, 10); // Updates every 10 milliseconds
};

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    startTimer();
  }
});

stopBtn.addEventListener("click", () => {
  isRunning = false;
  clearInterval(timerInterval);
});

resetBtn.addEventListener("click", () => {
  isRunning = false;
  clearInterval(timerInterval);
  ms = 0;
  sec = 0;
  min = 0;
  hr = 0;
  timerDisplay.innerHTML = "00:00:00:00";
});
