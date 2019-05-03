// GLOBAL VARIABLES
let wSize = 500 // window size
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
  background(255);
  angle += vel;
  translate(250, 250);
  rotate(angle);
  vel = vel * 0.985;
  image(img, 0, 0, 500, 500);
  if (mouseIsPressed) {
    vel += 0.06;
    vel = Math.min(vel, 0.5);
  }
  print(vel);
}

function mousePressed() {
  vel += 0.6;
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

