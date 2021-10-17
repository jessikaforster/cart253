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
  candy1Image = loadImage("assets/images/candy.png");
  candy2Image = loadImage("assets/images/candy.png");
  candy3Image = loadImage("assets/images/candy.png");
  candy4Image = loadImage("assets/images/candy.png");
  lollipopImage = loadImage("assets/images/lollipop.png");
  appleImage = loadImage("assets/images/apple.png");
  brushImage = loadImage("assets/images/toothbrush.png");
  bg = loadImage("assets/images/street.gif");
}

// Identifying variables
let user = {
  x: 0,
  y: 0,
  width: 300,
  height: 300,
  vx: 0,
  vy: 0,
  speed: 3,
};

let state = `simulation`; // Can be: title, simulation, love, sadness

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create 4 candies placed randomly
  candy1 = createCandy(random(0,width), random(0,height));
  candy2 = createCandy(random(0,width), random(0,height));
  candy3 = createCandy(random(0,width), random(0,height));
  candy4 = createCandy(random(0,width), random(0,height));
}

function createCandy(x,y) {
let candy = {
  x: x,
  y: y,
  width: 200,
  height: 200,
  vx: 0,
  vy: 0,
  speed: 3,
};
  return candy;
}

function createLollipop(x,y) {
let lollipop = {
  x: x,
  y: y,
  width: 200,
  height: 200,
  vx: 0,
  vy: 0,
  speed: 3,
};
  return lollipop;
}

function createApple(x,y) {
  let apple = {
    x: x,
    y: y,
    width: 200,
    height: 200,
    vx: 0,
    vy: 0,
    speed: 3,
};
  return apple;
}

function createBrush(x,y) {
  let brush = {
    x: x,
    y: y,
    width: 200,
    height: 200,
    vx: 0,
    vy: 0,
    speed: 3,
};
  return brush;
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
  displayUser();
  displayApple();
  displayLollipop();
  displayBrush();
  displayCandy(candy1);
  displayCandy(candy2);
  displayCandy(candy3);
  displayCandy(candy4);
  moveApple();
  moveBrush();
  moveCandy(candy1);
  moveCandy(candy2);
  moveCandy(candy3);
  moveCandy(candy4);
  moveLollipop();
  createCandy();
}

function end1() {

}

function end2() {

}

// Choose whether to change direction
function moveApple(apple) {
  let change = random(0, 1);
  if (change < 0.05) {
    apple.vx = random(-apple.speed, apple.speed);
    apple.vy = random(-apple.speed, apple.speed);

    apple.x = apple.x + apple.vx;
    apple.y = apple.y + apple.vy;

    apple.x = constrain(apple.x, 0, width);
    apple.y = constrain(apple.y, 0, height);
  }
}

  function moveBrush(brush) {
  let change1 = random(0, 1);
  if (change1 < 0.05) {
    brush.vx = random(-brush.speed, brush.speed);
    brush.vy = random(-brush.speed, brush.speed);

    brush.x = brush.x + brush.vx;
    brush.y = brush.y + brush.vy;

    brush.x = constrain(brush.x, 0, width);
    brush.y = constrain(brush.y, 0, height);
  }
}

  function moveLollipop(lollipop) {
  let change2 = random(0, 1);
  if (change2 < 0.05) {
    lollipop.vx = random(-lollipop.speed, lollipop.speed);
    lollipop.vy = random(-lollipop.speed, lollipop.speed);

    lollipop.x = lollipop.x + lollipop.vx;
    lollipop.y = lollipop.y + lollipop.vy;

    lollipop.x = constrain(lollipop.x, 0, width);
    lollipop.y = constrain(lollipop.y, 0, height);
  }
}

  function moveCandy(candy) {
  let change3 = random(0, 1);
  if (change3 < 0.05) {
    candy.vx = random(-candy.speed, candy.speed);
    candy.vy = random(-candy.speed, candy.speed);

    candy.x = candy.x + candy.vx;
    candy.y = candy.y + candy.vy;

    candy.x = constrain(candy.x, 0, width);
    candy.y = constrain(candy.y, 0, height);
  }
}

function displayUser() {
  push();
  image(userImage, mouseX, mouseY, user.width, user.height);
  pop();
}

function displayLollipop(lollipop) {
  push();
  image(lollipopImage, lollipop.x, lollipop.y, lollipop.width, lollipop.height);
  pop();
}

function displayCandy(candy) {
  push();
  image(candyImage, candy.x, candy.y, candy.width, candy.height);
  pop();
}

function displayApple(apple) {
  push();
  image(appleImage, apple.x, apple.y, apple.width, apple.height);
  pop();
}

function displayBrush(brush) {
  push();
  image(brushImage, brush.x, brush.y, brush.width, brush.height);
  pop();
}
