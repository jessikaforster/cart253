/**
Dodge-Em
Jessika Forster

Exercise to practice writing if-statements, working with loops for drawing, playing with the mouse
and learning to display image(s).
*/

/**
Description of preload
*/
let gunImage;
let alien1Image;
let alien2Image;
let alien3Image;

function preload() {
  gunImage = loadImage("assets/images/gun.png");
  alien1Image = loadImage("assets/images/alien1.png");
  alien2Image = loadImage("assets/images/alien2.png");
  alien3Image = loadImage("assets/images/alien3.png");
}

let gun = {
  width: 100,
  height: 100,
};

let alien1 = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
};

let alien2 = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
};

let alien3 = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
};
/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth,windowHeight);

  noCursor();
}


/**
Description of draw()
*/
function draw() {
  background(0);

// Display images
  image(gunImage,mouseX,mouseY,gun.width,gun.height);
  image(alien1Image,alien1.x,alien1.y,alien1.width,alien1.height);
  image(alien2Image,alien2.x,alien2.y,alien2.width,alien2.height);
  image(alien3Image,alien3.x,alien3.y,alien3.width,alien3.height);
}
