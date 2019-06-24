// get needed elements (circle and numbers)!
const svgCircle = document.getElementById("svg-circle");
const textInsideBttn = document.getElementById("btn-spinner");
// variables that track timer (digits)
let countdown;
let timerLoop;

// settings
let nbrOfSecs = 45; // each reset or timerend will set the timer to this value!

const startCountdownTimer = () => {
  console.log("triggered countdown timer now!");
  svgCircle.style.opacity = 1;
  svgCircle.classList.add("toggle-countdown");
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
  svgCircle.classList.remove("toggle-countdown");
  clearInterval(timerLoop);
  countdown = nbrOfSecs;
  textInsideBttn.innerText = "SPIN";
  textInsideBttn.style.color = "black";
  svgCircle.style.opacity = 0;
};

