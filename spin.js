let count = 1;

function spin(evt) {

  nbrOfSpinDegrees = count * 2000 + Math.floor(Math.random()*360);

  $('#btn-spinner').click(function() {
    $('#spinner-img').css({
      'transform': `rotate(${nbrOfSpinDegrees}deg)`,
      'transition-timing-function': `${selectBezier()}`
    });
    // .addClass('myClass');
  });
  count += 1;
  // evt.srcElement.innerHTML = `Hello ${nbrOfSpinDegrees}`;
  // spinner = document.getElementById("spinner-img");
  // console.log(spinner);
  // console.log(spinner.style.width);
  // // spinner.style.transform = `rotate(${nbrOfSpinDegrees})`;
  // console.log(spinner);
}


function selectBezier() {
  let myArray = [
    "cubic-bezier(0.25, 0. 1, 0.25, 1)",
    "cubic-bezier(.8, .1, 1, .04)",
    "cubic-bezier(.1, .9, .9, .1)",
    "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    "cubic-bezier(0.6, 1.5, 0.6, 1)"
  ];
  return myArray[Math.floor(Math.random() * myArray.length)];
}

// https://codepen.io/Guilh/full/ZQxoOX/

