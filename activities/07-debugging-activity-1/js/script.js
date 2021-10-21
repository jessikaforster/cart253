"use strict";

let candyImage;
let school = [];
let schoolSize = 10;

function preload() {
  candyImage = loadImage("assets/images/candy.png");
}

function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < schoolSize; i++) {
    let candy = createCandy(random(0,width), random(0,height));
    school.push(candy);
  }
}

// createFish(x,y)
// Creates a new JavaScript Object describing a fish and returns it
function createCandy(x, y) {
  let candy = {
    x: x,
    y: y,
    width: 100,
    height: 100,
    vx: 0,
    vy: 0,
    speed: 2
  };
  return candy;
}

// draw()
// Moves and displays our fish
function draw() {
  background(0);

  for (let i = 0; i < school.length; i++) {
    moveCandy(school[i]);
    displayCandy(school[i]);
  }
}

// moveFish(fish)
// Chooses whether the provided fish changes direction and moves it
function moveCandy(candy) {
  // Choose whether to change direction
  let change = random(0, 1);
  if (change < 0.05) {
    candy.vx = random(-candy.speed, candy.speed);
    candy.vy = random(-candy.speed, candy.speed);
  }

  // Move the fish
  candy.x = candy.x + candy.vx;
  candy.y = candy.y + candy.vy;

  // Constrain the fish to the canvas
  candy.x = constrain(candy.x, 0, width);
  candy.y = constrain(candy.y, 0, height);
}

// displayFish(fish)
// Displays the provided fish on the canvas
function displayCandy(candy) {
  push();
  image(candyImage, candy.x, candy.y, candy.width, candy.height);
  pop();
}

function mousePressed() {
  let candy = createCandy(mouseX,mouseY);
  school.push(candy);
}
