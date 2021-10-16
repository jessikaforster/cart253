"use strict";

// Our user, to move with the mouse
let user = {
  x: 0,
  y: 0,
  size: 100
};

// Foods
let food1;
let food2;
let food3;
let food4;
let food5;
let food6;

function setup() {
  createCanvas(windowWidth, windowHeight);

  food1 = createFood(250,windowHeight/2);
  food2 = createFood(350,windowHeight/2);
  food3 = createFood(450,windowHeight/2);
  food4 = createFood(550,windowHeight/2);
  food5 = createFood(650,windowHeight/2);
  food6 = createFood(750,windowHeight/2);
}

function createFood(x,y) {
  let food = {
    x: x,
    y: y,
    size: 50,
    eaten: false
  };
  return food;
}

function draw() {
  background(0);

  // Move the user (with the mouse)
  moveUser();

  // Check whether the user has eaten either food
  checkFood(food1);
  checkFood(food2);
  checkFood(food3);
  checkFood(food4);
  checkFood(food5);
  checkFood(food6);

  // Display the user and foods
  displayUser();
  displayFood(food1);
  displayFood(food2);
  displayFood(food3);
  displayFood(food4);
  displayFood(food5);
  displayFood(food6);
}

// Sets the user position to the mouse position
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

function checkFood(food) {
  if (!food.eaten) {
    let d = dist(user.x, user.y, food.x, food.y);
    if (d < user.size / 2 + food.size / 2) {
      food.eaten = true;
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

function displayFood(food) {
  if (!food.eaten){
    push();
    fill(255,100,100);
    ellipse(food.x,food.y,food.size);
    pop();
  }
}

// Draw food1 as a circle
function displayFood1() {
  // We don't want to display food1 if it's been eaten
  if (!food1.eaten) {
    push();
    fill(255, 100, 100);
    ellipse(food1.x, food1.y, food1.size);
    pop();
  }
}

// As above but for food2
function displayFood2() {
  if (!food2.eaten) {
    push();
    fill(255, 100, 100);
    ellipse(food2.x, food2.y, food2.size);
    pop();
  }
}