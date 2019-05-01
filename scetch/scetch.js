// GLOBAL VARIABLES
let wSize = 400; // window size

function setup() {
	let myCanvas = createCanvas(wSize, wSize);
	myCanvas.parent("main"); /* display scetch in html element with id "main"*/
	instr = loadImage("scetch/res/wheel.png");
}

function draw() {
  background(240);
	image(instr, 50, 50);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
  } else if (keyCode === RIGHT_ARROW) {
  } else if (keyCode === UP_ARROW) {
  } else if (keyCode === DOWN_ARROW) {
  } else if (keyCode === ENTER) {
	} else if (keyCode === ESCAPE) {
	}
}

function mousePressed() {

}

function checkLevel() {
}
