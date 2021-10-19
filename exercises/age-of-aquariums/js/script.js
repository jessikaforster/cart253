"use strict";

let candies = [];
let candyNum = 10;
let candyImage;
let candies2 = [];
let candy2Num = 10;
let appleImage;
let apples = [];
let appleNum = 3;
let brushImage;
let brushes = [];
let brushNum = 3;
let lollipopImage;
let chocolateImage;
let pumpkinImage;
let bg;

// Our user, to move with the mouse
let user = {
  x: 0,
  y: 0,
  width: 300,
  height: 300,
}

function preload() {
  bg = loadImage("assets/images/street.gif");
  candyImage = loadImage("assets/images/candy.png");
  lollipopImage = loadImage("assets/images/lollipop.png");
  chocolateImage = loadImage("assets/images/chocolate.png");
  pumpkinImage = loadImage("assets/images/pumpkin.png");
  appleImage = loadImage("assets/images/apple.png");
  brushImage = loadImage("assets/images/toothbrush.png");
}

let state = `simulation`; // Can be: title, simulation, end1, end2

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < candyNum; i++) {
    let candy = createCandy(random(0, width), random(0, height));
    candies.push(candy);
  }
  for (let i = 0; i < candy2Num; i++) {
    let candy2 = createCandy2(random(0, width), random(0, height));
    candies2.push(candy2);
  }

  for (let i = 0; i < brushNum; i++) {
    let brush = createBrush(random(0, width), random(0, height));
    brushes.push(brush);
  }

  for (let i = 0; i < appleNum; i++) {
    let apple = createApple(random(0, width), random(0, height));
    apples.push(apple);
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
    eaten: false,
  };
  return candy;
}

function createCandy2(x, y) {
  let candy2 = {
    x: x,
    y: y,
    width: 100,
    height: 100,
    vx: 0,
    vy: 0,
    speed: 2,
    eaten: false,
  };
  return candy2;
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

let candy3 = {
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  vx: 0,
  vy: 0,
  speed: 2,
}

function draw() {
  background(bg);

  // Identifying all states
  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `end1`) {
    end1();
  } else if (state === `end2`) {
    end2();
  } else if (state === `end2`) {
    end2();
  }
}

function title() {

}

function simulation() {
  // Move the user (with the mouse)
  moveUser();
  displayUser();
  makeCandy();
  makeCandy2();
  displayCandy3();
  checkCandy3();
  moveCandy3();
  noCursor();
  makeApple();
  makeBrush();
}


function end1() {

}

function end2() {
  fill(255);
  textAlign(CENTER, CENTER);
  text(`Watch Yumi's Cells every`, width / 2, 385);
}

function makeCandy() {
  for (let i = 0; i < candies.length; i++) {
    moveCandy(candies[i]);
    displayCandy(candies[i]);
    checkCandy(candies[i]);
  }
}

function makeCandy2() {
  for (let i = 0; i < candies2.length; i++) {
    moveCandy2(candies2[i]);
    displayCandy2(candies2[i]);
    checkCandy2(candies2[i]);
  }
}

function makeBrush() {
  for (let i = 0; i < brushes.length; i++) {
    moveBrush(brushes[i]);
    displayBrush(brushes[i]);
    checkBrush(brushes[i]);
  }
}

function makeApple() {
  for (let i = 0; i < apples.length; i++) {
    moveApple(apples[i]);
    displayApple(apples[i]);
    checkApple(apples[i]);
  }
}

function moveCandy(candy) {
  let change = random(0, 1);
  if (change < 0.05) {
    candy.vx = random(-candy.speed, candy.speed);
    candy.vy = random(-candy.speed, candy.speed);
  }

  candy.x = candy.x + candy.vx;
  candy.y = candy.y + candy.vy;

  candy.x = constrain(candy.x, 0, width);
  candy.y = constrain(candy.y, 0, height);
}

function moveCandy2(candy2) {
  let change = random(0, 1);
  if (change < 0.05) {
    candy2.vx = random(-candy2.speed, candy2.speed);
    candy2.vy = random(-candy2.speed, candy2.speed);
  }

  candy2.x = candy2.x + candy2.vx;
  candy2.y = candy2.y + candy2.vy;

  candy2.x = constrain(candy2.x, 0, width);
  candy2.y = constrain(candy2.y, 0, height);
}

function moveCandy3() {
  let change = random(0, 1);
  if (change < 0.05) {
    candy3.vx = random(-candy3.speed, candy3.speed);
    candy3.vy = random(-candy3.speed, candy3.speed);
  }

  candy3.x = candy3.x + candy3.vx;
  candy3.y = candy3.y + candy3.vy;

  candy3.x = constrain(candy3.x, 0, width);
  candy3.y = constrain(candy3.y, 0, height);
}

function moveBrush(brush) {
  let change = random(0, 1);
  if (change < 0.05) {
    brush.vx = random(-brush.speed, brush.speed);
    brush.vy = random(-brush.speed, brush.speed);
  }

  brush.x = brush.x + brush.vx;
  brush.y = brush.y + brush.vy;

  brush.x = constrain(brush.x, 0, width);
  brush.y = constrain(brush.y, 0, height);
}

function moveApple(apple) {
  let change = random(0, 1);
  if (change < 0.05) {
    apple.vx = random(-apple.speed, apple.speed);
    apple.vy = random(-apple.speed, apple.speed);
  }

  apple.x = apple.x + apple.vx;
  apple.y = apple.y + apple.vy;

  apple.x = constrain(apple.x, 0, width);
  apple.y = constrain(apple.y, 0, height);
}

// Sets the user position to the mouse position
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

function checkCandy(candy) {
  if (!candy.eaten) {
    let d = dist(user.x, user.y, candy.x, candy.y);
    if (d < user.width / 2 + candy.width / 2) {
      candy.eaten = true;
    }
  }

  if (!candy.eaten) {
    let d = dist(user.x, user.y, candy.x, candy.y);
    if (d < user.height / 2 + candy.height / 2) {
      candy.eaten = true;
    }
  }
}

function checkCandy2(candy2) {
  if (!candy2.eaten) {
    let d = dist(user.x, user.y, candy2.x, candy2.y);
    if (d < user.width / 2 + candy2.width / 2) {
      candy2.eaten = true;
    }
  }

  if (!candy2.eaten) {
    let d = dist(user.x, user.y, candy2.x, candy2.y);
    if (d < user.height / 2 + candy2.height / 2) {
      candy2.eaten = true;
    }
  }
}

function checkBrush(brush) {
  let d1 = dist(user.x, user.y, brush.x, brush.y);
  if (d1 < user.width / 2 + brush.width / 2)
    state = `end1`;

  let d2 = dist(user.x, user.y, brush.x, brush.y);
  if (d2 < user.height / 2 + brush.height / 2)
    state = `end1`;
}

function checkCandy3() {
  let d3 = dist(user.x, user.y, candy3.x, candy3.y);
  if (d3 < user.width / 2 + candy3.width / 2)
    state = `end2`;

  let d4 = dist(user.x, user.y, candy3.x, candy3.y);
  if (d4 < user.height / 2 + candy3.height / 2)
    state = `end2`;
}

function checkApple(apple) {
  let d5 = dist(user.x, user.y, apple.x, apple.y);
  if (d5 < user.width / 2 + apple.width / 2)
    state = `end3`;

  let d6 = dist(user.x, user.y, apple.x, apple.y);
  if (d6 < user.height / 2 + apple.height / 2)
    state = `end3`;
}

// Draw the user as a circle
function displayUser() {
  push();
  image(pumpkinImage, user.x, user.y, user.width, user.height);
  pop();
}

function displayCandy(candy) {
  if (!candy.eaten) {
    push();
    image(candyImage, candy.x, candy.y, candy.width, candy.height);
    pop();
  }
}

function displayCandy2(candy2) {
  if (!candy2.eaten) {
    push();
    image(lollipopImage, candy2.x, candy2.y, candy2.width, candy2.height);
    pop();
  }
}

function displayCandy3() {
  push();
  image(chocolateImage, candy3.x, candy3.y, candy3.width, candy3.height);
  pop();
}

function displayBrush(brush) {
  push();
  image(brushImage, brush.x, brush.y, brush.width, brush.height);
  pop();
}

function displayApple(apple) {
  push();
  image(appleImage, apple.x, apple.y, apple.width, apple.height);
  pop();
}
