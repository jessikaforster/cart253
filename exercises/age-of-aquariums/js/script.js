/**
Age of Aquariums
Jessika Forster

Exercise to practice adding a user-controlled shape (or image), making the user interact with the fish
(or whatever they are in your simulation), changing the fish (or whatever) creation and adding at least 2
endings.
*/

"use strict";

/**
Description of preload
*/

let userImage;
let candyImage;
let lollipopImage;
let appleImage;
let brushImage;
let bg;

function preload() {
  userImage = loadImage("assets/images/pumpkin.png");
  candyImage = loadImage("assets/images/candy.png");
  lollipopImage = loadImage("assets/images/lollipop.png");
  appleImage = loadImage("assets/images/apple.png");
  brushImage = loadImage("assets/images/toothbrush.png");
  bg = loadImage("assets/images/street.gif");
}

// Identifying variables
let user = {
  x: 0,
  y: 0,
  width: 200,
  height: 200,
  vx: 0,
  vy: 0,
  speed: 3,
};

let candy = {
  x: 0,
  y: 0,
  width: 200,
  height: 200,
  vx: 0,
  vy: 0,
  speed: 3,
};

let lollipop = {
  x: 0,
  y: 0,
  width: 200,
  height: 200,
  vx: 0,
  vy: 0,
  speed: 3,
};

let apple = {
  x: 0,
  y: 0,
  width: 200,
  height: 200,
  vx: 0,
  vy: 0,
  speed: 3,
};

let brush = {
  x: 0,
  y: 0,
  width: 200,
  height: 200,
  vx: 0,
  vy: 0,
  speed: 3,
};

let state = `simulation`; // Can be: title, simulation, love, sadness

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth,windowHeight);
}


/**
Description of draw()
*/
function draw() {
  background(bg);

  noCursor();

  // Identifying all states
if (state === `title`) {
  title();
} else if (state === `simulation`) {
  simulation();
} else if (state === `end1`) {
  end1();
} else if (state === `end2`) {
  end2();
  }
}

function title() {

}

function simulation() {
  displayItems();
  moveItems();
}

function end1() {

}

function end2() {

}

  // Choose whether to change direction
function moveItems() {
  let change = random(0, 1);
  if (change < 0.05) {
    apple.vx = random(-apple.speed, apple.speed);
    apple.vy = random(-apple.speed, apple.speed);
}
let change1 = random(0, 1);
if (change1 < 0.05) {
  brush.vx = random(-brush.speed, brush.speed);
  brush.vy = random(-brush.speed, brush.speed);
}
  let change2 = random(0, 1);
  if (change2 < 0.05) {
    lollipop.vx = random(-lollipop.speed, lollipop.speed);
    lollipop.vy = random(-lollipop.speed, lollipop.speed);
}
    let change3 = random(0, 1);
    if (change3 < 0.05) {
      candy.vx = random(-candy.speed, candy.speed);
      candy.vy = random(-candy.speed, candy.speed);
  }

  // Move the items
  apple.x = apple.x + apple.vx;
  apple.y = apple.y + apple.vy;

  brush.x = brush.x + brush.vx;
  brush.y = brush.y + brush.vy;

lollipop.x =lollipop.x +lollipop.vx;
lollipop.y =lollipop.y +lollipop.vy;

  candy.x = candy.x + candy.vx;
  candy.y = candy.y + candy.vy;

  // Constrain the items to the canvas
  apple.x = constrain(apple.x, 0, width);
  apple.y = constrain(apple.y, 0, height);

  brush.x = constrain(brush.x, 0, width);
  brush.y = constrain(brush.y, 0, height);

  lollipop.x = constrain(lollipop.x, 0, width);
  lollipop.y = constrain(lollipop.y, 0, height);

  candy.x = constrain(candy.x, 0, width);
  candy.y = constrain(candy.y, 0, height);
}

function displayItems() {
  image(userImage, mouseX, mouseY, user.width, user.height);
  image(lollipopImage, lollipop.x, lollipop.y, lollipop.width, lollipop.height);
  image(candyImage, candy.x, candy.y, candy.width, candy.height);
  image(appleImage, apple.x, apple.y, apple.width, apple.height);
  image(brushImage, brush.x, brush.y, brush.width, brush.height);
}
