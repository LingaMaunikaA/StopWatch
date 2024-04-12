const timeDisplay = document.querySelector('.time');
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const resetButton = document.querySelector('.reset');
const lapButton = document.querySelector('.lap');
const lapsDisplay = document.querySelector('.laps');

let time = 0;
let intervalId;
let laps = [];

startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
resetButton.addEventListener('click', reset);
lapButton.addEventListener('click', lap);

function start() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      time += 0.01;
      timeDisplay.textContent = time.toFixed(2);
    }, 10);
  }
}

function pause() {
  clearInterval(intervalId);
  intervalId = null;
}

function reset() {
  clearInterval(intervalId);
  intervalId = null;
  time = 0;
  timeDisplay.textContent = '0.00';
  laps = [];
  lapsDisplay.textContent = '';
}

function lap() {
  laps.push(time.toFixed(2));
  lapsDisplay.innerHTML = laps.join('<li></li>');
}