// get needed elements (circle and numbers)!
const svgCircleRed = document.getElementById("svg-circle-red");
const svgCircleWhite = document.getElementById("svg-circle-white");
const textInsideBttn = document.getElementById("btn-spinner");
// variables that track timer (digits)
let countdown;
let timerLoop;

// settings
let nbrOfSecs = 22; // each reset or timerend will set the timer to this value!

const startCountdownTimer = () => {
  console.log("triggered countdown timer now!");
  svgCircleWhite.style.opacity = 1;
  svgCircleRed.style.opacity = 1;
  svgCircleRed.classList.add("toggle-countdown");
  countdown = nbrOfSecs;
  textInsideBttn.innerText = countdown;
  textInsideBttn.style.color = "red";
  timerLoop = setInterval(function() {
    countdown = --countdown;
    textInsideBttn.innerText = countdown;
    if(countdown <= 0){
      clearInterval(timerLoop);
      resetCountdownTimer();
    }
  }, 1000);
};

const resetCountdownTimer = () => {
  console.log("resetting countdown timer now!");
  svgCircleRed.classList.remove("toggle-countdown");
  clearInterval(timerLoop);
  countdown = nbrOfSecs;
  textInsideBttn.innerText = "SPIN";
  textInsideBttn.style.color = "black";
  svgCircleRed.style.opacity = 0;
  svgCircleWhite.style.opacity = 0;
};

