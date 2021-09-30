/**
Dodge-Em
Jessika Forster

Exercise to practice writing if-statements, working with loops for drawing, playing with the mouse
and learning to display image(s).
*/

/**
Description of preload
*/
let userImage;
let alien1Image;
let alien2Image;
let alien3Image;

function preload() {
  userImage = loadImage("assets/images/user.png");
  alien1Image = loadImage("assets/images/alien1.png");
  alien2Image = loadImage("assets/images/alien2.png");
  alien3Image = loadImage("assets/images/alien3.png");
}

let user = {
  x: 0,
  y: 0,
  width: 200,
  height: 200,
};

let alien1 = {
  x: 0,
  y: 0,
  width: 200,
  height: 200,
  vx: 0,
  vy: 0,
  speed: 5,
};

let alien2 = {
  x: 0,
  y: 0,
  width: 200,
  height: 200,
  vx: 0,
  vy: 0,
  speed: 5,
};

let alien3 = {
  x: 0,
  y: 0,
  width: 200,
  height: 200,
  vx: 0,
  vy: 0,
  speed: 5,
};
/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth,windowHeight);

  alien1.y = random(0,height);
  alien1.vx = alien1.speed;

  alien2.y = random(0,height);
  alien2.vx = alien2.speed;

  alien3.y = random(0,height);
  alien3.vx = alien3.speed;

  noCursor();
}


/**
Description of draw()
*/
function draw() {
  background(0);

// Aliens' movement
alien1.x = alien1.x + alien1.vx;
alien1.y = alien1.y + alien1.vy;
alien2.x = alien2.x + alien2.vx;
alien2.y = alien2.y + alien2.vy;
alien3.x = alien3.x + alien3.vx;
alien3.y = alien3.y + alien3.vy;

if (alien1.x > width) {
    alien1.x = 0;
    alien1.y = random(0,height);
}

if (alien2.x > width) {
    alien2.x = 0;
    alien2.y = random(0,height);
}

if (alien3.x > width) {
    alien3.x = 0;
    alien3.y = random(0,height);
}

// User movement
user.x = mouseX;
user.y = mouseY;

// When gun catches alien
let d = dist(user.x,user.y,alien1.x,alien1.y);
  if (d < alien1.x/10 + user.x/10)
  if (d < alien1.y/10 + user.y/10) {
  noLoop();
  }

// Display images
  image(userImage,user.x,user.y,user.width,user.height);
  image(alien1Image,alien1.x,alien1.y,alien1.width,alien1.height);
  image(alien2Image,alien2.x,alien2.y,alien2.width,alien2.height);
  image(alien3Image,alien3.x,alien3.y,alien3.width,alien3.height);
}
