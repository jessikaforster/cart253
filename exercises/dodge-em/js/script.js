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
let gunImage;
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
  gunImage = loadImage("assets/images/gun.png");
  bg = loadImage("assets/images/backdrop.jpg");
}

let user = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  // acceleration: 1.5,
};

let gun = {
  x: 0,
  y: 0,
  width: 200,
  height: 200,
  speed: 10,
};

let bullet = {
  x: 0,
  y: 720,
  width: 100,
  height: 100,
  r: 255,
  g: 236,
  b: 89,
  speed: 15,
  acceleration: 10,
}

let alien1 = {
  x: 0,
  y: 0,
  width: 400,
  height: 400,
  vx: 0,
  vy: 0,
  speed: 5,
  acceleration: 2,
  size: 1.01,
};

let alien2 = {
  x: 0,
  y: 0,
  width: 300,
  height: 300,
  vx: 0,
  vy: 0,
  speed: 5,
  acceleration: 1.5,
  size: 1.01,
};

let alien3 = {
  x: 0,
  y: 0,
  width: 500,
  height: 500,
  vx: 0,
  vy: 0,
  speed: 5,
  acceleration: 1.2,
  size: 1.01,
};
/**
Description of setup
*/
function setup() {
  createCanvas(2560,1440);

  alien1.y = random(0,height);
  alien1.vx = alien1.speed;

  alien2.x = random(0,width);
  alien2.vy = alien2.speed;

  alien3.y = random(0,height);
  alien3.vx = alien3.speed;

  alien3.x = random(0,width);
  alien3.vy = alien3.speed;

  bullet.x = (0,width)
  bullet.speed = bullet.speed + bullet.acceleration;

  noCursor();
}


/**
Description of draw()
*/
function draw() {
  background(bg);

if (mouseIsPressed === true) {
  user.width = 200;
} else {
  user.width = 100;
};

if (mouseIsPressed === true) {
  user.height = 200;
} else {
  user.height = 100;
};

// Aliens/ growth
// alien1.width = alien1.width + alien1.size
// alien1.height = alien1.width + alien1.size
// alien2.width = alien2.width + alien2.size
// alien2.height = alien2.width + alien2.size
// alien3.width = alien3.width + alien1.size
// alien3.height = alien3.width + alien1.size

// Aliens' movement
alien1.x = alien1.x + (alien1.vx + alien1.acceleration);
alien2.y = alien2.y + (alien2.vy + alien2.acceleration);
alien3.x = alien3.x + (alien3.vx + alien3.acceleration);
alien3.y = alien3.y + (alien3.vy + alien3.acceleration);

if (alien1.x > width) {
    alien1.x = 0;
    alien1.y = random(0,height);
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
if (mouseIsPressed === true) {
  user.x = mouseX;
} else {
  user.x = width/2;
};

if (mouseIsPressed === true) {
  user.y = mouseY;
} else {
  user.y = height/2;
};
//user.x = mouseX;
//user.y = mouseY;

// When gun is launched
if (keyIsPressed === true) {
  bullet.x = bullet.x + bullet.speed
} else {
  bullet.x = 0;
}

// When user touches alien
let d1 = dist(user.x,user.y,alien1.x,alien1.y);
  if (d1 < alien1.x/7 + user.x/7)
  if (d1 < alien1.y/7 + user.y/7) {
  noLoop();
  }

let d2 = dist(user.x,user.y,alien2.x,alien2.y);
  if (d2 < alien2.x/15 + user.x/15)
  if (d2 < alien2.y/15 + user.y/15) {
  noLoop();
  }

let d3 = dist(user.x,user.y,alien3.x,alien3.y);
  if (d3 < alien3.x/7 + user.x/7)
  if (d3 < alien3.y/7 + user.y/7) {
    noLoop();
  }

  // When gun touches alien
let d4 = dist(gun.x,gun.y,alien1.x,alien1.y);
  if (d4 < alien1.x/7 + gun.x/7)
  if (d4 < alien1.y/7 + gun.y/7) {
    noLoop();
  }

let d5 = dist(gun.x,gun.y,alien2.x,alien2.y);
  if (d5 < alien2.x/15 + gun.x/15)
  if (d5 < alien2.y/15 + gun.y/15) {
    noLoop();
  }

let d6 = dist(user.x,user.y,alien3.x,alien3.y);
  if (d6 < alien3.x/7 + user.x/7)
  if (d6 < alien3.y/7 + user.y/7) {
    noLoop();
  }

// Display ellipse
  ellipse(bullet.x,bullet.y,bullet.width,bullet.height);
  fill(bullet.r,bullet.g,bullet.b);
  noStroke();

// Display images
  image(userImage,user.x,user.y,user.width,user.height);
  image(alien1Image,alien1.x,alien1.y,alien1.width,alien1.height);
  image(alien2Image,alien2.x,alien2.y,alien2.width,alien2.height);
  image(alien3Image,alien3.x,alien3.y,alien3.width,alien3.height);
  image(gunImage,gun.x,gun.y,gun.width,gun.height);
}
