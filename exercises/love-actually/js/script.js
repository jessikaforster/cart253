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

let user = {
  x: 250,
  y: 250,
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
  x: 160,
  y: 120,
  width: 179,
  height: 256,
};

let circle1 = {
  x: 0,
  y: 0,
  r: 133,
  g: 133,
  b: 133,
  size: 100,
  vx: 5,
  vy: 0,
  speed: 3,
};

let state = `title`; // Can be: title, simulation, love, sadness

/**
Description of setup
*/
function setup() {
  createCanvas(500,500);
}

/**
Description of draw()
*/
function draw() {
  background(0);

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
}

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

    function simulation() {
      move();
      handleInput();
      userMovement();
      //setupCircle();
      display();
    }

    function love() {
      push();
      displayLove();
      textSize(64);
      fill(255,150,150);
      textAlign(CENTER,CENTER);
      text(`LOVE!`,width/2,height/2);
      pop();
    }

    function sadness() {
      push();
      displaySadness();
      textSize(64);
      fill(150,150,255);
      textAlign(CENTER,CENTER);
      text(`:(`,width/2,height/2);
      pop();
    }

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

// Display images

function display() {
ellipse(circle1.x,circle1.y,circle1.size);
fill(circle1.r,circle1.g,circle1.b);
noStroke();
image(userImage,user.x,user.y,user.width,user.height);
}

function displayTitle() {
  image(frogImage,frog.x,frog.y,frog.width,frog.height);
}

function displaySadness() {
  image(sadcellImage,sadcell.x,sadcell.y,sadcell.width,sadcell.height);
}

function displayLove() {
  image(happycellImage,happycell.x,happycell.y,happycell.width,happycell.height);
}

function displayPoster() {
image(ycposterImage,ycposter.x,ycposter.y,ycposter.width,ycposter.height);
}

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}
