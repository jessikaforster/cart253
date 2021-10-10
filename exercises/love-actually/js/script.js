/**
Love Actually
Jessika Forster

This is the 3rd exercise for CART 253. The program must allow for the user to control one of the circles, the non-user circle should move differently,
at least one extra function must be added and at least one extra ending is required.
*/

/**
Load photos to be used in game
*/
let userImage;
let frogImage;
let happycellImage;
let sadcellImage;
let ycposterImage;

function preload() {
  userImage = loadImage("assets/images/froghead.png");
  frogImage = loadImage("assets/images/frog.png");
  happycellImage = loadImage("assets/images/happycell.png");
  sadcellImage = loadImage("assets/images/sadcell.png");
  ycposterImage = loadImage("assets/images/ycposter.png");
}

// Identifying variables
let user = {
  x: 170,
  y: 400,
  width: 170,
  height: 170,
  vx: 0,
  vy: 0,
  speed: 3,
};

let frog = {
  x: 50,
  y: 100,
  width: 400,
  height: 400,
};

let happycell = {
  x: 50,
  y: 100,
  width: 400,
  height: 400,
};

let sadcell = {
  x: 50,
  y: 100,
  width: 400,
  height: 400,
};

let ycposter = {
  x: 145,
  y: 30,
  width: 214.8,
  height: 307.2,
};

let circle1 = {
  x: 0,
  y: 0,
  r: 155,
  g: 155,
  b: 155,
  size: 100,
  vx: 5,
  vy: 0,
  speed: 3,
};

let door = {
  x: 158,
  y: -190,
  r: 255,
  g: 143,
  b: 227,
  size: 200,
};

let state = `title`; // Can be: title, simulation, love, sadness

/**
Creating square canvas
*/
function setup() {
  createCanvas(500,500);
}

/**
Filling canvas with black
*/
function draw() {
  background(0);

// Identifying all states
if (state === `title`) {
  title();
  }
else if (state === `simulation`) {
  simulation();
  }
else if (state === `love`) {
  love();
  }
else if (state === `sadness`) {
  sadness();
  }
else if (state === `poster`) {
  poster();
  }
}

// Control of user using arrow keys
function handleInput() {
  if (keyIsDown(UP_ARROW)) {
    user.vy = -user.speed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    user.vy = user.speed;
  }
  else {
    user.vy = 0;
  }

if (keyIsDown(LEFT_ARROW)) {
  user.vx = -user.speed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    user.vx = user.speed;
  }
  else {
  user.vx = 0;
  }
}

// Title state
function title() {
  push();
  displayTitle();
  textSize(30);
  textFont(`Roboto Mono`);
  fill(255,143,227);
  textAlign(CENTER,CENTER);
  text(`Make it into Yumi’s ♡`,width/2,70);
  text(`without getting caught`,width/2,100);
  pop();
}

// Simulation state
function simulation() {
  move();
  handleInput();
  userMovement();
  checkExit();
  checkOverlap();
  display();
}

// Love state (when character gets to other side safely)
function love() {
  push();
  displayLove();
  textFont(`Roboto Mono`);
  textSize(30);
  fill(255,143,227);
  textAlign(CENTER,CENTER);
  text(`You made it into Yumi's ♡`,width/2,40);
  text(`I hope your love lasts`,width/2,70);
  text(`a lifetime!`,width/2,100);
  pop();
}

// Sadness state (when character gets hit by circle)
function sadness() {
  push();
  displaySadness();
  textFont(`Roboto Mono`);
  textSize(30);
  fill(0,72,255);
  textAlign(CENTER,CENTER);
  text(`You got caught...`,width/2,70);
  text(`Better luck next time!`,width/2,100);
  pop();
}

// Easter egg state after you win or lose game
function poster() {
  displayPoster();
  push();
  textFont(`Roboto Mono`);
  textSize(30);
  fill(255);
  textAlign(CENTER,CENTER);
  text(`Watch Yumi's Cells every`,width/2,385);
  text(`Friday & Saturday @`,width/2,415);
  text(`10:50pm KST on tvN!`,width/2,445);
  pop();
}

// Depending on the user, one of the following states will appear
function checkOverlap () {
  let d1 = dist(user.x,user.y,circle1.x,circle1.y);
  if (d1 < user.width/6 + circle1.size/6)
    state = `sadness`;

  let d2 = dist(user.x,user.y,circle1.x,circle1.y);
  if (d2 < user.height/6 + circle1.size/6)
    state = `sadness`;
  }

function checkExit () {
  let d3 = dist(user.x,user.y,door.x,door.y);
  if (d3 < user.width/10 + door.size/10)
    state = `love`;

  let d4 = dist(user.x,user.y,door.x,door.y);
  if (d4 < user.height/10 + door.size/10)
    state = `love`;
  }

// Movement of the user and circle
function userMovement() {
  user.x = user.x + user.vx;
  user.y = user.y + user.vy;
}

function move() {
  circle1.x = circle1.x + circle1.vx;


if (circle1.x > width) {
  circle1.x = 0;
  circle1.y = random(0,height);
  }
}

// Shapes and user image that will be displayed in simulation state
function display() {
  push();
  fill(door.r,door.g,door.b);
  rect(door.x,door.y,door.size);
  pop();
  ellipse(circle1.x,circle1.y,circle1.size);
  fill(circle1.r,circle1.g,circle1.b);
  noStroke();
  image(userImage,user.x,user.y,user.width,user.height);
}

// Frog image in title state
function displayTitle() {
  image(frogImage,frog.x,frog.y,frog.width,frog.height);
}

// Image in sadness state and trigger poster state when mouse is over character
function displaySadness() {
  image(sadcellImage,sadcell.x,sadcell.y,sadcell.width,sadcell.height);

  let d5 = dist(mouseX,mouseY,sadcell.x,sadcell.y);
  if (d5 < sadcell.width / 2) {
    state = `poster`
  }

  let d6 = dist(mouseX,mouseY,sadcell.x,sadcell.y);
  if (d6 < sadcell.height / 2) {
    state = `poster`
  }
}

// Image in love state and trigger poster state when mouse is over character
function displayLove() {
  image(happycellImage,happycell.x,happycell.y,happycell.width,happycell.height);

  let d7 = dist(mouseX,mouseY,happycell.x,happycell.y);
  if (d7 < happycell.width / 2) {
    state = `poster`
  }

  let d8 = dist(mouseX,mouseY,happycell.x,happycell.y);
  if (d8 < happycell.height / 2) {
    state = `poster`
  }
}

// Image in poster state
function displayPoster() {
  image(ycposterImage,ycposter.x,ycposter.y,ycposter.width,ycposter.height);
}

// Clicking at the title state will begin the game
function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}
