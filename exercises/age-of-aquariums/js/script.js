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

function setup() {
  createCanvas(windowWidth,windowHeight);

  for (let i = 0; i < candyNum; i++) {
    let candy = createCandy(random(0,width), random(0,height));
    candies.push(candy);
  }

  for (let i = 0; i < lollipopNum; i++) {
    let lollipop = createLollipop(random(0,width), random(0,height));
    lollipops.push(lollipop);
  }
}

function createCandy(x,y) {
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

function createLollipop(x,y) {
  let lollipop = {
    x: x,
    y: y,
    width: 100,
    height: 100,
    vx: 0,
    vy: 0,
    speed: 2
  };
  return lollipop;
}

function draw() {
  background(bg);


  for (let i = 0; i < candies.length; i++) {
    moveCandy(candies[i]);
    displayCandy(candies[i]);
    moveLollipop(lollipops[i]);
    displayLollipop(lollipops[i]);
  }
}

function moveCandy(candy) {
  let change = random(0, 1);
  if (change < 0.05) {
    candy.vx = random(-candy.speed, candy.speed);
    candy.vy = random(-candy.speed, candy.speed);

    candy.x = candy.x + candy.vx;
    candy.y = candy.y + candy.vy;

    candy.x = constrain(candy.x, 0, width);
    candy.y = constrain(candy.y, 0, height);
  }
}

function moveLollipop(lollipop) {
  let change = random(0, 1);
  if (change < 0.05) {
    lollipop.vx = random(-lollipop.speed, lollipop.speed);
    lollipop.vy = random(-lollipop.speed, lollipop.speed);

    lollipop.x = lollipop.x + lollipop.vx;
    lollipop.y = lollipop.y + lollipop.vy;

    lollipop.x = constrain(lollipop.x, 0, width);
    lollipop.y = constrain(lollipop.y, 0, height);
  }
}

function displayCandy(candy) {
  push();
  image(candyImage, candy.x, candy.y, candy.width, candy.height);
  pop();
}

function displayLollipop(lollipop) {
  push();
  image(lollipopImage, lollipop.x, lollipop.y, lollipop.width, lollipop.height);
  pop();
}

function displayUser() {
  image(userImage, mouseX, mouseY, user.width, user.height);
}
