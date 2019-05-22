// get needed elements (circle and numbers)!
const countdownDiv = document.getElementById("countdown");
const countdownNumber = document.getElementById('countdown-number');
const svgCircle = document.getElementById("svg-circle");
// variables that track timer (digits)
let countdown;
let timerLoop;

// settings
let nbrOfSecs = 3; // each reset or timerend will set the timer to this value!

const startCountdownTimer = () => {
  console.log("triggered countdown timer now!");
  // countdownDiv.setAttribute('style', 'visibility: visible;');
  countdownDiv.style.visibility = "visible";
  console.log(countdownDiv);
  svgCircle.classList.add("toggle-countdown");
  countdown = nbrOfSecs;
  countdownNumber.textContent = countdown;
  timerLoop = setInterval(function() {
    countdown = --countdown;
    countdownNumber.textContent = countdown;
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
  countdownNumber.innerHTML = "-";
  countdownDiv.style.visibility = "hidden"; // not needed
};

