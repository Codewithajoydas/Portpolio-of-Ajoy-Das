let isActive = false;
let timer;
let seconds = 0;
let minutes = 25;

const inp = document.getElementById("inp");
const rs = document.getElementById("rs");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");
const timerMinutes = document.getElementById("time-minutes");
const timerSeconds = document.getElementById("time-seconds");

function updateTime() {
  timerMinutes.textContent = minutes.toString().padStart(2, "0");
  timerSeconds.textContent = seconds.toString().padStart(2, "0");
}

function startPomodoro() {
  if (inp.value.trim() === "") {
    alert("Please enter a task to focus on.");
    return;
  }

  if (!isActive) {
    isActive = true;
    startBtn.textContent = "Pause";
    rs.textContent = "Focus Time";
    startTimer();
  } else {
    isActive = false;
    startBtn.textContent = "Resume";
    clearInterval(timer);
  }
}

function startTimer() {
  timer = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timer);
        rs.textContent = "Time's up!";
        startBtn.disabled = true;
        resetBtn.disabled = false;
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }

    updateTime();
  }, 1000);
}

function resetPomodoro() {
  clearInterval(timer);
  isActive = false;
  seconds = 0;
  minutes = 25;
  updateTime();
  rs.textContent = "Focus Time";
  startBtn.textContent = "Start";
  startBtn.disabled = false;
  resetBtn.disabled = true;
}
