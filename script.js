const timer = document.getElementById("stopwatch");
const lapBox = document.getElementById("lapBox");
const lapHdr = document.getElementById("lapHeader");

var hr = 0,
  min = 0,
  sec = 0;
var stoptime = true;
var lapCount = 0;

const pad = (n) => String(parseInt(n)).padStart(2, "0");

const timerCycle = () => {
  if (stoptime) return;
  sec = parseInt(sec) + 1;
  if (sec === 60) {
    min++;
    sec = 0;
  }
  if (min === 60) {
    hr++;
    min = 0;
  }
  timer.textContent = pad(hr) + ":" + pad(min) + ":" + pad(sec);
  setTimeout(timerCycle, 1000);
};

function startTimer() {
  if (stoptime) {
    stoptime = false;
    timerCycle();
  }
}

function lapTimer() {
  lapCount++;
  const row = document.createElement("div");
  row.className = "lap-row";
  row.innerHTML =
    `<span class="lap-num">Lap ${lapCount}</span>` +
    `<span class="lap-time">${pad(hr)}:${pad(min)}:${pad(sec)}</span>`;
  lapBox.prepend(row);
  lapHdr.style.display = "flex";
}

function stopTimer() {
  stoptime = true;
}

function resetTimer() {
  stoptime = true;
  hr = 0;
  min = 0;
  sec = 0;
  lapCount = 0;
  timer.textContent = "00:00:00";
  lapBox.innerHTML = "";
  lapHdr.style.display = "none";
}
