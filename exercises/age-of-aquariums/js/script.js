"use strict";

// Our user, to move with the mouse
let user = {
  x: 0,
  y: 0,
  size: 100
};

// Foods
let candy1;
let candy2;
let candy3;
let candy4;
let candy5;
let candy6;

function setup() {
  createCanvas(windowWidth, windowHeight);

  candy1 = createCandy(250,windowHeight/2);
  candy2 = createCandy(350,windowHeight/2);
  candy3 = createCandy(450,windowHeight/2);
  candy4 = createCandy(550,windowHeight/2);
  candy5 = createCandy(650,windowHeight/2);
  candy6 = createCandy(750,windowHeight/2);
}

function createCandy(x,y) {
  let candy = {
    x: x,
    y: y,
    size: 50,
    eaten: false
  };
  return candy;
}

function draw() {
  background(0);

  // Move the user (with the mouse)
  moveUser();

  // Check whether the user has eaten either food
  checkCandy(candy1);
  checkCandy(candy2);
  checkCandy(candy3);
  checkCandy(candy4);
  checkCandy(candy5);
  checkCandy(candy6);

  // Display the user and foods
  displayUser();
  displayCandy(candy1);
  displayCandy(candy2);
  displayCandy(candy3);
  displayCandy(candy4);
  displayCandy(candy5);
  displayCandy(candy6);
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
