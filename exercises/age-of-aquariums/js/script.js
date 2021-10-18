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
let candyImage;
let candies = [];
let candyNum = 10;
let lollipopImage;
let lollipops = [];
let lollipopNum = 10;
let appleImage;
let apples = [];
let appleNum = 10;
let brushImage;
let brushes = [];
let brushNum = 10;
let userImage;
let bg;

function preload() {
  userImage = loadImage("assets/images/pumpkin.png");
  candyImage = loadImage("assets/images/candy.png");
  lollipopImage = loadImage("assets/images/lollipop.png");
  appleImage = loadImage("assets/images/apple.png");
  brushImage = loadImage("assets/images/toothbrush.png");
  bg = loadImage("assets/images/street.gif");
}

// let state = `title`; // Can be: title, simulation, end1, end2, end3

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < candyNum; i++) {
    let candy = createCandy(random(0, width), random(0, height));
    candies.push(candy);
  }

  for (let i = 0; i < lollipopNum; i++) {
    let lollipop = createLollipop(random(0, width), random(0, height));
    lollipops.push(lollipop);
  }

  for (let i = 0; i < appleNum; i++) {
    let apple = createApple(random(0, width), random(0, height));
    apples.push(apple);
  }

  for (let i = 0; i < brushNum; i++) {
    let brush = createBrush(random(0, width), random(0, height));
    brushes.push(brush);
  }
}

function createCandy(x, y) {
  let candy = {
    x: x,
    y: y,
    width: 100,
    height: 100,
    vx: 0,
    vy: 0,
    speed: 2,
  };
  return candy;
}

function createLollipop(x, y) {
  let lollipop = {
    x: x,
    y: y,
    width: 100,
    height: 100,
    vx: 0,
    vy: 0,
    speed: 2,
  };
  return lollipop;
}

function createApple(x, y) {
  let apple = {
    x: x,
    y: y,
    width: 100,
    height: 100,
    vx: 0,
    vy: 0,
    speed: 2,
  };
  return apple;
}

function createBrush(x, y) {
  let brush = {
    x: x,
    y: y,
    width: 100,
    height: 100,
    vx: 0,
    vy: 0,
    speed: 2,
  };
  return brush;
}

let user = {
  x: 0,
  y: 0,
  width: 300,
  height: 300,
};

function draw() {
  background(bg);
  makeApple();
  makeCandy();
  makeLollipop();
  makeBrush();
  displayUser();

  noCursor();
}

// Identifying all states
/*  if (state === `title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }
  else if (state === `end1`) {
    end1();
  }
  else if (state === `end2`) {
    end2();
    }
  }
} */


function makeCandy() {
  for (let i = 0; i < candies.length; i++) {
    moveCandy(candies[i]);
    displayCandy(candies[i]);
  }
}

function makeLollipop() {
    for (let i = 0; i < lollipops.length; i++) {
      moveLollipop(lollipops[i]);
      displayLollipop(lollipops[i]);
  }
}

function makeApple() {
    for (let i = 0; i < apples.length; i++) {
      moveApple(apples[i]);
      displayApple(apples[i]);
  }
}

function makeBrush() {
    for (let i = 0; i < brushes.length; i++) {
      moveBrush(brushes[i]);
      displayBrush(brushes[i]);
  }
}

function moveCandy(candy) {
  let change1 = random(0, 1);
  if (change1 < 0.05) {
    candy.vx = random(-candy.speed, candy.speed);
    candy.vy = random(-candy.speed, candy.speed);

    candy.x = candy.x + candy.vx;
    candy.y = candy.y + candy.vy;

    candy.x = constrain(candy.x, 0, width);
    candy.y = constrain(candy.y, 0, height);
  }
}

function displayCandy(candy) {
  push();
  image(candyImage, candy.x, candy.y, candy.width, candy.height);
  pop();
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

function displayLollipop(lollipop) {
  push();
  image(lollipopImage, lollipop.x, lollipop.y, lollipop.width, lollipop.height);
  pop();
}

function moveApple(apple) {
  let change3 = random(0, 1);
  if (change3 < 0.05) {
    apple.vx = random(-apple.speed, apple.speed);
    apple.vy = random(-apple.speed, apple.speed);

    apple.x = apple.x + apple.vx;
    apple.y = apple.y + apple.vy;

    apple.x = constrain(apple.x, 0, width);
    apple.y = constrain(apple.y, 0, height);
  }
}


function displayApple(apple) {
  push();
  image(appleImage, apple.x, apple.y, apple.width, apple.height);
  pop();
}

function moveBrush(brush) {
  let change4 = random(0, 1);
  if (change4 < 0.05) {
    brush.vx = random(-brush.speed, brush.speed);
    brush.vy = random(-brush.speed, brush.speed);

    brush.x = brush.x + brush.vx;
    brush.y = brush.y + brush.vy;

    brush.x = constrain(brush.x, 0, width);
    brush.y = constrain(brush.y, 0, height);
  }
}

function displayBrush(brush) {
  push();
  image(brushImage, brush.x, brush.y, brush.width, brush.height);
  pop();
}

function displayUser() {
  image(userImage, mouseX, mouseY, user.width, user.height);
}
