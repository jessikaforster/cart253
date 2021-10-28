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

let splashSFX = undefined;
let rainSFX;
let thunderSFX = undefined;

/**
Description of preload
*/
function preload() {
  sunImage = loadImage("assets/images/sun.png");
  cloudImage = loadImage("assets/images/cloud.png");

  rainSFX = loadSound("assets/sounds/rain.wav");
  splashSFX = loadSound("assets/sounds/splash.wav");
  thunderSFX = loadSound("assets/sounds/thunder.wav");
}

let state = `title`; // Can be: title, simulation, end1, end2

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  paddle = new Paddle(800, 30);

  for (let i = 0; i < numClouds; i++) {
    let x = random(0, width);
    let y = random(-400, -100);
    let cloud = new Cloud(x, y, cloudImage, splashSFX, thunderSFX);
    clouds.push(cloud);
  }

  for (let i = 0; i < numSuns; i++) {
    let x = random(0, width);
    let y = random(-400, -100);
    let sun = new Sun(x, y, sunImage, splashSFX, thunderSFX);
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
  fill(255);
  textSize(40);
  textAlign(CENTER, CENTER);
  textFont('Special Elite');
  text(`The Weather is in Your Hands`, windowWidth/2, windowHeight/4);
  text(`Control the puddle with the mouse to keep the items in the air`, windowWidth/2, windowHeight/3);
  text(`Press 'C' to add clouds`, windowWidth/2, windowHeight/2);
  text(`Press 'S' to add suns`, windowWidth/2, windowHeight/1.8);
  text(`Click to start`, windowWidth/2, windowHeight/1.5);
}

function simulation() {
  paddle.move();
  paddle.display();
  createClouds();
  createSuns();
}

function end1() {
  fill(255);
  textSize(40);
  textAlign(CENTER, CENTER);
  textFont('Special Elite');
  text(`It was being kept under control, but now`, windowWidth/2, windowHeight/2.2);
  text(`the fog is stopping you from going out… Stay safe!`, windowWidth/2, windowHeight/1.8);
}

function end2() {
  fill(255);
  textSize(40);
  textAlign(CENTER, CENTER);
  textFont('Special Elite');
  text(`You couldn’t manage to keep the sun up,`,windowWidth/2, windowHeight/2.2);
  text(`another gloomy day ahead… Keep yourself busy inside!`,windowWidth/2, windowHeight/1.8);
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
      cloud.sound();
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
      sun.sound();
    }
  }
}

function keyPressed() {
  if (keyCode === 83) {
    let x = mouseX;
    let y = mouseY;
    let sun = new Sun(x, y, sunImage, splashSFX, thunderSFX);
    suns.push(sun);
  }

  if (keyCode === 67) {
    let x = mouseX;
    let y = mouseY;
    let cloud = new Cloud(x, y, cloudImage, splashSFX, thunderSFX);
    clouds.push(cloud);
  }
}

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
  rainSFX.loop();
}
