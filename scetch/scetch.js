// GLOBAL VARIABLES
let wSize = 350 // window size
let angle = 0;
let vel = 0;
let img;

function preload() {
  img = loadImage("scetch/res/spinner.png");
}

function setup() {
	let myCanvas = createCanvas(wSize, wSize);
	myCanvas.parent("main"); /* display scetch in html element with id "main"*/
  rectMode(CENTER);
  imageMode(CENTER);
}

function draw() {
  background(64, 64, 64);
  angle += vel;
  vel = vel * 0.985;
  translate(wSize/2, wSize/2);
  rotate(angle);
  image(img, 0, 0, wSize, wSize);
  if (mouseIsPressed && mouseX >= 50 && mouseX <= 250 && mouseY >= 50 && mouseY <= 250) {
    vel += 0.06;
    vel = Math.min(vel, 0.5);
  }
  // print(mouseX);
}

// function mousePressed() {
//   vel += 0.6;
// }

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
  } else if (keyCode === RIGHT_ARROW) {
  } else if (keyCode === UP_ARROW) {
  } else if (keyCode === DOWN_ARROW) {
  } else if (keyCode === ENTER) {
	} else if (keyCode === ESCAPE) {
	}
}

