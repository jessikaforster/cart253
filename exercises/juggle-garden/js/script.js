/**
Juggle Garden
Jessika Forster

This is the 5th CART 253 exercise. The objectives are to work with object-oriented
programming, interacting objects and input in OOP. This simulation should include
another form of user-control, a new class and objects and at least 2 endings.
*/

"use strict";

let gravityForce = 0.0025;

let suns = [];
let numSuns = 10;
let clouds = [];
let numClouds = 10;

let sunImage = undefined;
let cloudImage = undefined;

let paddle;

/**
Description of preload
*/
function preload() {
sunImage = loadImage("assets/images/sun.png");
cloudImage = loadImage("assets/images/cloud.png");
}

let state = `simulation`; // Can be: title, simulation, end1, end2

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  paddle = new Paddle(600, 20);

  for (let i = 0; i < numClouds; i++) {
  let x = random(0, width);
  let y = random(-400, -100);
  let cloud = new Cloud(x, y, cloudImage);
  clouds.push(cloud);
  }

  for (let i = 0; i < numSuns; i++) {
  let x = random(0, width);
  let y = random(-400, -100);
  let sun = new Sun(x, y, sunImage);
  suns.push(sun);
  }
}


/**
Description of draw()
*/
function draw() {
  background(0);

  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `end1`) {
    end1();
  } else if (state === `end2`) {
    end2();
    }
  }

function title() {

}

function simulation() {
  paddle.move();
  paddle.display();
  createClouds();
  createSuns();
}

function end1() {

}

function end2() {

}

function createClouds() {
for (let i = 0; i < clouds.length; i++) {
  let cloud = clouds[i];
  if (cloud.active) {
  cloud.gravity(gravityForce);
  cloud.move();
  cloud.bounce(paddle);
  cloud.display();
    }
  }
}

function createSuns() {
for (let i = 0; i < suns.length; i++) {
  let sun = suns[i];
  if (sun.active) {
  sun.gravity(gravityForce);
  sun.move();
  sun.bounce(paddle);
  sun.display();
    }
  }
}
