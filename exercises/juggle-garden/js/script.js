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
let numSuns = 1;
let clouds = [];
let numClouds = 1;

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

  paddle = new Paddle(800, 30);

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
  background(0, 9, 135);

  for (let i = 0; i < 100; i++) {
    let x = random(0, width);
    let y = random(0, height);
    stroke(255);
    point(x, y);
  }

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
  fill(255);
  textSize(80);
  textFont('Amatic SC');
  text(`end1`, width/1.6, height/2.1);
}

function end2() {
  fill(255);
  textSize(80);
  textFont('Amatic SC');
  text(`end2`, width/1.6, height/2.1);
}

function createClouds() {
  for (let i = 0; i < clouds.length; i++) {
    let cloud = clouds[i];
    if (cloud.active) {
      cloud.gravity(gravityForce);
      cloud.move();
      cloud.bounce(paddle);
      cloud.display();
      cloud.check();
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
      sun.check();
    }
  }
}

function keyPressed() {
  if (keyCode === 83) {
    let x = mouseX;
    let y = mouseY;
    let sun = new Sun(x, y, sunImage);
    suns.push(sun);
  }

  if (keyCode === 67) {
    let x = mouseX;
    let y = mouseY;
    let cloud = new Cloud(x, y, cloudImage);
    clouds.push(cloud);
  }
}

/* function mousePressed() {
  let x = mouseX;
  let y = mouseY;
  let cloud = new Cloud(x, y, cloudImage);
  clouds.push(cloud);
} */
