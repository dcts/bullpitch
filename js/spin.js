// random degree function (n = number of spins)
const randomExtraSpins = n => Math.random()*n*360;

// initialize degrees
const minSpinDegrees = 5 * 360; // 5 spins minimum!
let degreeSpinSum = normalize(minSpinDegrees + randomExtraSpins(3)); // 3 extra spins max!

// initialize DOM objects
const button = document.getElementById("btn-spinner");
const spinner = document.getElementById("spinner-img");
const bullbar = document.getElementById("bull-bar");

// ON BUTTON CLICK -> SPIN THE WHEEL!
button.addEventListener('click', (event) => {
  console.log("DEGREE SPIN SUM");
  console.log(degreeSpinSum);
  // reset
  bullbar.setAttribute("style", "border: none;");
  spinner.innerHTML = "Spin";
  bullbar.innerHTML = "- - - - -";
  // calculate spinner degrees and spin! (transformation)
  degreeSpinSum += normalize(minSpinDegrees + randomExtraSpins(3));
  const selectedBezier = selectBezier();
  console.log(selectedBezier);
  let buildStyle = `transform: rotate(${degreeSpinSum}deg); transition-timing-function: ${selectedBezier}`;
  spinner.setAttribute("style", buildStyle);
});

// ADD EVENTLISTENERS FOR "transitioned" event! (loop over all types of transitioned)
"transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd".split(" ").forEach((event) => {
  spinner.addEventListener(event, () => { // webkitTransitionEnd oTransitionEnd MSTransitionEnd"
    bullbar.innerHTML = `${bullName()}`;
    bullbar.setAttribute("style", "border: 5px solid #ABF9F7; transition: ease 0.25s;");
    button.innerHTML = "Pitch";
  });
})

/*
 * SELECT BEZIER
 * randomly picks one predefined bezier transition function
 * resources used: https://codepen.io/Guilh/full/ZQxoOX/
 */
function selectBezier() {
  let sampleArray = [
    "cubic-bezier(0.6, 1.5, 0.6, 1)",
    "cubic-bezier(.1, .9, .9, .1)",
    "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    "cubic-bezier(0.25, 0. 1, 0.25, 1)"
  ];
  return sampleArray[Math.floor(Math.random() * sampleArray.length)];
}

/*
 * NORMALIZE
 * lets the wheel stop at certain splitpoints (determined by nbrOfSplitpoints!)
 */
function normalize(input) {
  const nbrOdSplitpoints = 8;
  const interval = 360 / nbrOdSplitpoints;
  return Math.floor(input/interval)*interval;
}
