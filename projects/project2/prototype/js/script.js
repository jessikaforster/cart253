/**
Project 2 Prototype
Jessika Forster

Prototype for project 2, final CART 253 project.
*/

"use strict";

let state = `simulation`; // Could be simulation, failed or success

// Array to display all 3 kinds of birds
let birds = [];
let numBluejays = 5;
let numSparrows = 5;
let numCardinals = 5;

// Declaring user variable
let user;

// Declaring background image variable
let bg;

// Declaring all images that will be used
let userImage = undefined;

let bluejayImage = undefined;
let cardinalImage = undefined;
let sparrowImage = undefined;

/**
Loading all images to be used into code
*/
function preload() {
  bluejayImage = loadImage("assets/images/bluejay.gif");
  cardinalImage = loadImage("assets/images/cardinal.gif");
  sparrowImage = loadImage("assets/images/sparrow.gif");

  userImage = loadImage("assets/images/reindeer.gif");

  bg = loadImage("assets/images/bg.gif");
}

/**
Creating the canvas to fill the user's window size
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Displaying user image
  let x = width / 6;
  let y = height / 2;
  user = new User(x, y, userImage);

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
}

/**
Displaying the background image and creating simulation, failed and success states
*/
function draw() {
  background(bg);

  if (state === `simulation`) {
    simulation();
  } else if (state === `failed`) {
    failed();
  } else if (state === `success`) {
    success();
  }
}

// Simulation state
function simulation() {

  // Display user image
  user.display();

  // If user gets hit by a bird, `failed` state is triggered
  if (!user.dodged) {
    state = `failed`;
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
    user.handleInput();
    user.checkHit(bird);
  }
}

// State that appears when user fails to dodge a bird
function failed() {
  displayText(`YOU HIT A BIRD AND THE SLEIGH GO RUINED...TIME TO GO BACK TO THE NORTH POLE :(`)
}

// State that appears when user has successfully dodged enough birds
function success() {
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
