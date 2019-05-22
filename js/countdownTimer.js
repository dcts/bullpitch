// get needed elements (circle and numbers)!
const svgCircle = document.getElementById("svg-circle");
const countdownNumberEl = document.getElementById('countdown-number');
// variables that track timer (digits)
let countdown;
let timerLoop;

// settings
let nbrOfSecs = 3; // each reset or timerend will set the timer to this value!

const startCountdownTimer = () => {
  console.log("triggered countdown timer now!");
  svgCircle.classList.add("toggle-countdown");
  countdown = nbrOfSecs;
  countdownNumberEl.textContent = countdown;
  timerLoop = setInterval(function() {
    countdown = --countdown;
    countdownNumberEl.textContent = countdown;
    if(countdown <= 0){
      clearInterval(timerLoop);
      resetCountdownTimer();
    }
  }, 1000);
};

const resetCountdownTimer = () => {
  console.log("resetting countdown timer now!");
  svgCircle.classList.remove("toggle-countdown");
  clearInterval(timerLoop);
  countdown = nbrOfSecs;
  countdownNumberEl.innerHTML = "-";
};

