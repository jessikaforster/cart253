"use strict";

let candies = [];
let candyNum = 10;
let bg;

// Our user, to move with the mouse
let user = {
  x: 0,
  y: 0,
  size: 100
};

function preload() {
    bg = loadImage("assets/images/street.gif");
  }

let state = `title`; // Can be: title, simulation, end1, end2

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < candyNum; i++) {
    let candy = createCandy(random(0,width), random(0,height));
    candies.push(candy);
  }
}

function createCandy(x,y) {
  let candy = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2,
    eaten: false,
  };
  return candy;
}

function draw() {
  background(bg);

  // Identifying all states
if (state === `title`) {
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
  


  for (let i = 0; i < candies.length; i++) {
    moveCandy(candies[i]);
    displayCandy(candies[i]);
    checkCandy(candies[i]);
  }
  // Move the user (with the mouse)
  moveUser();
  displayUser();
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

// Sets the user position to the mouse position
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

function checkCandy(candy) {
  if (!candy.eaten) {
    let d = dist(user.x, user.y, candy.x, candy.y);
    if (d < user.size / 2 + candy.size / 2) {
      candy.eaten = true;
    }
  }
}

// Draw the user as a circle
function displayUser() {
  push();
  fill(255);
  ellipse(user.x, user.y, user.size);
  pop();
}

function displayCandy(candy) {
  if (!candy.eaten){
    push();
    fill(255,100,100);
    ellipse(candy.x,candy.y,candy.size);
    pop();
  }
}
