// get needed elements (circle and numbers)!
const svgCircle = document.getElementById("svg-circle");
const countdownNumberEl = document.getElementById('countdown-number');

// variables that track timer (digits)


// add event listener to automatically reset timer! (maybe?)
// TODO

const timerNumbers = () => {

  var countdown = 3;
  countdownNumberEl.textContent = countdown;
  let timerLoop = setInterval(function() {
    countdown = --countdown;
    countdownNumberEl.textContent = countdown;
    if(countdown <= 0){
      clearInterval(timerLoop);
      document.getElementById("countdown-number").innerHTML = "-"
    }
  }, 1000);
};

const startCountdownTimer = () => {
  console.log("triggered countdown timer now!");
  svgCircle.classList.add("toggle-countdown");
  timerNumbers();
};

const resetCountdownTimer = () => {
  console.log("resetting countdown timer now!");
  svgCircle.classList.remove("toggle-countdown");
  clearInterval(timerLoop);
};

