let timer;
let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {
  timer = setInterval(updateTime, 10);
  document.getElementById("startBtn").disabled = true;
}

function stopStopwatch() {
  clearInterval(timer);
  document.getElementById("startBtn").disabled = false;
}

function resetStopwatch() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  miliseconds = 0;
  updateDisplay();
  document.getElementById("startBtn").disabled = false;
}

function updateTime() {
  miliseconds++;
  if (miliseconds === 100) {
    miliseconds = 0;
    seconds++;
    if (seconds === 59) {
      seconds = 0;
      minutes++;

      if (minutes === 59) {
        minutes = 0;
        hours++;

      }
    }
  }

  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent =
    formatTime(hours) +
    ":" +
    formatTime(minutes) +
    ":" +
    formatTime(seconds) +
    ":" +
    formatTime(miliseconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
