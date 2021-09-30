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
let bg;

function preload() {
  //background = loadImage("assets/images/backdrop.png");
  userImage = loadImage("assets/images/user.png");
  alien1Image = loadImage("assets/images/alien1.png");
  alien2Image = loadImage("assets/images/alien2.png");
  alien3Image = loadImage("assets/images/alien3.png");
  bg = loadImage("assets/images/backdrop.jpg")
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
  width: 300,
  height: 300,
  vx: 0,
  vy: 0,
  speed: 5,
  acceleration: 1.1,
  size: 1.05,
};

let alien2 = {
  x: 0,
  y: 0,
  width: 300,
  height: 300,
  vx: 0,
  vy: 0,
  speed: 5,
  acceleration: 1.1,
  size: 1.05,
};

let alien3 = {
  x: 0,
  y: 0,
  width: 300,
  height: 300,
  vx: 0,
  vy: 0,
  speed: 5,
  acceleration: 1.1,
  size: 1.05,
};
/**
Description of setup
*/
function setup() {
  createCanvas(2560,1440);

  alien1.y = random(0,height);
  alien1.vx = alien1.speed;

  alien1.x = random(0,width);
  alien1.vy = alien1.speed;

  alien2.y = random(0,height);
  alien2.vx = alien2.speed;

  alien2.x = random(0,width);
  alien2.vy = alien2.speed;

  alien3.y = random(0,height);
  alien3.vx = alien3.speed;

  alien3.x = random(0,width);
  alien3.vy = alien3.speed;
  noCursor();
}


/**
Description of draw()
*/
function draw() {
  background(bg);

if (mouseIsPressed === true) {
  user.width = 100;
} else {
  user.width = 200;
};

if (mouseIsPressed === true) {
  user.height = 100;
} else {
  user.height = 200;
};

// Aliens/ growth
alien1.width = alien1.width + alien1.size
alien1.height = alien1.width + alien1.size
alien2.width = alien2.width + alien2.size
alien2.height = alien2.width + alien2.size
alien3.width = alien3.width + alien1.size
alien3.height = alien3.width + alien1.size

// Aliens' movement
alien1.x = alien1.x + (alien1.vx * alien1.acceleration);
alien1.y = alien1.y + (alien1.vy * alien1.acceleration);
alien2.x = alien2.x + (alien2.vx * alien2.acceleration);
alien2.y = alien2.y + (alien2.vy * alien2.acceleration);
alien3.x = alien3.x + (alien3.vx * alien3.acceleration);
alien3.y = alien3.y + (alien3.vy * alien3.acceleration);

if (alien1.x > width) {
    alien1.x = 0;
    alien1.y = random(0,height);
}

if (alien1.y > height) {
    alien1.y = 0;
    alien1.x = random(width,0);
}

if (alien2.x > width) {
    alien2.x = 0;
    alien2.y = random(0,height);
}

if (alien2.y > height) {
    alien2.y = 0;
    alien2.x = random(0,width);
}

if (alien3.x > width) {
    alien3.x = 0;
    alien3.y = random(0,height);
}

if (alien3.y > height) {
    alien3.y = 0;
    alien3.x = random(0,width);
}

// User movement
user.x = mouseX;
user.y = mouseY;

// When gun catches alien
let d1 = dist(user.x,user.y,alien1.x,alien1.y);
  if (d1 < alien1.x/20 + user.x/20)
  if (d1 < alien1.y/20 + user.y/20) {
  noLoop();
  }

let d2 = dist(user.x,user.y,alien2.x,alien2.y);
  if (d2 < alien2.x/20 + user.x/20)
  if (d2 < alien2.y/20 + user.y/20) {
  noLoop();
  }

let d3 = dist(user.x,user.y,alien3.x,alien3.y);
  if (d3 < alien3.x/20 + user.x/20)
  if (d3 < alien3.y/20 + user.y/20) {
    noLoop();
  }

// Display images
  image(userImage,user.x,user.y,user.width,user.height);
  image(alien1Image,alien1.x,alien1.y,alien1.width,alien1.height);
  image(alien2Image,alien2.x,alien2.y,alien2.width,alien2.height);
  image(alien3Image,alien3.x,alien3.y,alien3.width,alien3.height);
}
