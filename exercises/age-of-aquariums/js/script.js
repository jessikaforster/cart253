"use strict";

let candies = [];
let candyNum = 10;
let candies2 = [];
let candy2Num = 10;
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

let state = `simulation`; // Can be: title, simulation, end1, end2

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < candyNum; i++) {
    let candy = createCandy(random(0,width), random(0,height));
    candies.push(candy);
}
  for (let i = 0; i < candy2Num; i++) {
    let candy2 = createCandy2(random(0,width), random(0,height));
    candies2.push(candy2);
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

function createCandy2(x,y) {
  let candy2 = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2,
    eaten: false,
  };
  return candy2;
}

let candy3 = {
  x: 100,
  y: 100,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 2,
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
}


function end1() {

}

function end2() {
  fill(255);
    textAlign(CENTER,CENTER);
    text(`Watch Yumi's Cells every`,width/2,385);
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

function checkCandy2(candy2) {
  if (!candy2.eaten) {
    let d = dist(user.x, user.y, candy2.x, candy2.y);
    if (d < user.size / 2 + candy2.size / 2) {
      candy2.eaten = true;
    }
  }
}

function checkCandy3() {
    let d = dist(user.x, user.y, candy3.x, candy3.y);
    if (d < user.size / 2 + candy3.size / 2)
        state = `end2`;
  }

// Draw the user as a circle
function displayUser() {
  push();
  fill(255,115,0);
  noStroke();
  ellipse(user.x, user.y, user.size);
  pop();
}

function displayCandy(candy) {
  if (!candy.eaten){
    push();
    fill(0,217,255);
    noStroke();
    ellipse(candy.x,candy.y,candy.size);
    pop();
  }
}

function displayCandy2(candy2) {
  if (!candy2.eaten){
    push();
    fill(255,0,195);
    noStroke();
    ellipse(candy2.x,candy2.y,candy2.size);
    pop();
  }
}

function displayCandy3() {
    push();
    fill(144,0,255);
    noStroke();
    ellipse(candy3.x,candy3.y,candy3.size);
    pop();
}
