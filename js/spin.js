// initialize DOM objects
const button = document.getElementById("btn-spinner");
const spinner = document.getElementById("spinner-img");
const bullbar = document.getElementById("bull-bar");
let counter = 0; // count the number of spins (to get bullnames with no repetition)

// for analytics
const visitorId = createVisitorId();

// ON BUTTON CLICK -> SPIN THE WHEEL!
button.addEventListener('click', (event) => {
  // reset
  bullbar.setAttribute("style", "border: none;");
  spinner.innerHTML = "Spin";
  bullbar.innerHTML = "- - - - -";
  resetCountdownTimer();
  // calculate spinner degrees and spin! (transformation)
  degreeSpinSum += normalize(minSpinDegrees + randomExtraSpins(3));
  const selectedBezier = selectBezier();
  let buildStyle = `transform: rotate(${degreeSpinSum}deg); transition-timing-function: ${selectedBezier}`;
  spinner.setAttribute("style", buildStyle);
});

// ADD EVENTLISTENERS FOR "transitioned" event! (loop over all types of transitioned)
"transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd".split(" ").forEach((event) => {
  spinner.addEventListener(event, () => { // webkitTransitionEnd oTransitionEnd MSTransitionEnd"
    const bullName = `${bullNameWithSeed(counter++)}`
    bullbar.innerHTML = bullName;
    bullbar.setAttribute("style", "border: 5px solid #ABF9F7; transition: ease 0.25s;");
    button.innerHTML = "Pitch";
    startCountdownTimer();
    trackAnalytics(visitorId, bullName);
  });
})

/*
 * SELECT BEZIER
 * randomly picks one predefined bezier transition function
 * resources used: https://codepen.io/Guilh/full/ZQxoOX/
 */
const selectBezier = () => {
  let sampleArray = [
    "cubic-bezier(0.6, 1.5, 0.6, 1)",
    "cubic-bezier(.1, .9, .9, .1)",
    "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    "cubic-bezier(0.25, 0. 1, 0.25, 1)"
  ];
  return sampleArray[Math.floor(Math.random() * sampleArray.length)];
};

/*
 * NORMALIZE
 * lets the wheel stop at certain splitpoints (determined by nbrOfSplitpoints!)
 */
const normalize = input => {
  const nbrOdSplitpoints = 8;
  const interval = 360 / nbrOdSplitpoints;
  return Math.floor(input/interval)*interval;
};

/*
 * random degree function (n = number of spins)
 */
const randomExtraSpins = n => Math.random()*n*360;

// initialize degrees
const minSpinDegrees = 5 * 360; // 5 spins minimum!
let degreeSpinSum = normalize(minSpinDegrees + randomExtraSpins(3)); // 3 extra spins max!


