/**
Project 2 Prototype
Jessika Forster

Project 2, final CART 253 project.
*/

"use strict";

let state = `level2`; // Could be level1, level1Fail, level2, level2Fail, or success

// Array to display all 3 kinds of birds: LEVEL 1
let birds = [];
let numBluejays = 5;
let numSparrows = 5;
let numCardinals = 5;

// Declaring all images that will be used: LEVEL 1
let sleigh;

let snowfall;

let sleighImage = undefined;

let bluejayImage = undefined;
let cardinalImage = undefined;
let sparrowImage = undefined;

// Arrays to display falling candycanes and gifts: LEVEL 2
let candycanes = [];
let gifts = [];
let numGifts = 5;
let numCandycanes = 5;

// Loading images to be used into code : LEVEL 2
let stocking;

let stockingImage = undefined;

let giftImage = undefined;
let candycaneImage = undefined;


// Loading all images to be used into code
function preload() {
  // Loading images to be used into code : LEVEL 1
  bluejayImage = loadImage("assets/images/level1/bluejay.gif");
  cardinalImage = loadImage("assets/images/level1/cardinal.gif");
  sparrowImage = loadImage("assets/images/level1/sparrow.gif");

  sleighImage = loadImage("assets/images/level1/reindeer.gif");

  snowfall = loadImage("assets/images/snowfall.m4v");

  // Loading images to be used into code : LEVEL 2
  giftImage = loadImage("assets/images/level2/gift.png");
  candycaneImage = loadImage("assets/images/level2/candycane.png");

  stockingImage = loadImage("assets/images/level2/stocking.png");
}

/**
Creating the canvas to fill the user's window size
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

/* Setup for LEVEL 1 */
  // Displaying sleigh image: LEVEL 1
  let x = width / 6;
  let y = height / 2;
  sleigh = new Sleigh(x, y, sleighImage);

  // Displaying bluejays using for loop
  for (let i = 0; i < numBluejays; i++) {
    let x = random(width / 2, width);
    let y = random(0, height);
    let bluejay = new Bluejay(x, y, bluejayImage);
    birds.push(bluejay);
  }

  // Displaying sparrows using for loop
  for (let i = 0; i < numSparrows; i++) {
    let x = random(width / 2, width);
    let y = random(0, height);
    let sparrow = new Sparrow(x, y, sparrowImage);
    birds.push(sparrow);
  }

  // Displaying cardinals using for loop
  for (let i = 0; i < numCardinals; i++) {
    let x = random(width / 2, width);
    let y = random(0, height);
    let cardinal = new Cardinal(x, y, cardinalImage);
    birds.push(cardinal);
  }

  // Declaring the direction and speed that the birds will move in
  for (let i = 0; i < birds.length; i++) {
    let bird = birds[i];
    bird.vx = bird.speed;
  }

  /* Setup for LEVEL 2 */
  // Displaying sleigh image: LEVEL 1
  stocking = new Stocking(stockingImage);

  for (let i = 0; i < numCandycanes; i++) {
    let x = random(0, width);
    let y = random(0, height/2);
    let candycane = new Candycane(x, y, candycaneImage);
    candycanes.push(candycane);
  }

  for (let i = 0; i < candycanes.length; i++) {
    let candycane = candycanes[i];
    candycane.vy = candycane.speed;
  }

  for (let i = 0; i < numGifts; i++) {
    let x = random(0, width);
    let y = random(0, height/2);
    let gift = new Gift(x, y, giftImage);
    gifts.push(gift);
  }

  for (let i = 0; i < gifts.length; i++) {
    let gift = gifts[i];
    gift.vy = gift.speed;
  }
}
/**
Displaying the background image and creating simulation, failed and success states
*/
function draw() {

  if (state === `level1`) {
    level1();
  } else if (state === `level1Fail`) {
    level1Fail();
  } else if (state === `level2`) {
    level2();
} else if (state === `level2Fail`) {
  level2Fail();
  }
}

/* Level 1 state */
function level1() {
background(snowfall);
  // Display user image
  sleigh.display();

  // If user gets hit by a bird, `failed` state is triggered
  if (!sleigh.dodged) {
    state = `level1Fail`;
  }

  // For loop to create all of the birds along with all statements from Bird class
  for (let i = 0; i < birds.length; i++) {
    let bird = birds[i];
    bird.move();
    bird.wrap();
    bird.display();
    bird.wiggle();
    bird.numDodges();
    bird.checkExit();

    // User control
    sleigh.handleInput();
    sleigh.checkHit(bird);
  }
}

// State that appears when user fails to dodge a bird
function level1Fail() {
  background(snowfall);
  displayText(`YOU HIT A BIRD AND THE SLEIGH GO RUINED...TIME TO GO BACK TO THE NORTH POLE :(`)
}

function level2() {
background(snowfall);

stocking.handleInput();
stocking.display();
stocking.move();

for (let i = 0; i < candycanes.length; i++) {
  let candycane = candycanes[i];
  candycane.move();
  candycane.wrap();
  candycane.display();
 }

 for (let i = 0; i < gifts.length; i++) {
   let gift = gifts[i];
   gift.move();
   gift.wrap();
   gift.display();
  }
}

// State that appears when user has successfully dodged enough birds
function success() {
  background(snowfall);
  displayText(`YOU DODGED THE FLOCK OF BIRDS SUCCESSFULLY! THERE'S NO TIME TO CELEBRATE, WE NEED TO HURRY!`)
}

// All characteristics of the text (size, colour, etc.) to be reused in functions
function displayText(string) {
  push();
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);
  text(string, width / 2, height / 2);
  pop();
}
