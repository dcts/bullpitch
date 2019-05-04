// counts the number of spins
let count = 1;

/*
 * SPIN FUNCTION
 * rotates the spiner with a randomly selected bezier
 * transition function
 */
function spin(evt) {
  nbrOfSpinDegrees = count * 2000 + Math.floor(Math.random()*360);
  $('#btn-spinner').click(function() {
    $('#spinner-img').css({
      'transform': `rotate(${nbrOfSpinDegrees}deg)`,
      'transition-timing-function': selectBezier()
    });
  });
  count += 1;
}

/*
 * SELECT BEZIER
 * randomly picks one predefined bezier transition function
 * resources used: https://codepen.io/Guilh/full/ZQxoOX/
 */
function selectBezier() {
  let sampleArray = [
    "cubic-bezier(0.25, 0. 1, 0.25, 1)",
    "cubic-bezier(.8, .1, 1, .04)",
    "cubic-bezier(.1, .9, .9, .1)",
    "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    "cubic-bezier(0.6, 1.5, 0.6, 1)"
  ];
  return sampleArray[Math.floor(Math.random() * sampleArray.length)];
}
