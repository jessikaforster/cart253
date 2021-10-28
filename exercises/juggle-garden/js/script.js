/**
Juggle Garden
Jessika Forster

This is the 5th CART 253 exercise. The objectives are to work with object-oriented
programming, interacting objects and input in OOP. This simulation should include
another form of user-control, a new class and objects and at least 2 endings.
*/

"use strict";

// Defining force of gravity
let gravityForce = 0.0025;

// Defining items from classes
let suns = [];
let numSuns = 1;
let clouds = [];
let numClouds = 1;

let paddle;

// Defining images and sounds
let sunImage = undefined;
let cloudImage = undefined;

let splashSFX = undefined;
let rainSFX;
let thunderSFX = undefined;

let startImage;
let gif1Image;
let gif2Image;

/**
Loading all images and sounds into code
*/
function preload() {
  sunImage = loadImage("assets/images/sun.png");
  cloudImage = loadImage("assets/images/cloud.png");

  startImage = loadImage("assets/images/start.gif");
  gif1Image = loadImage("assets/images/end1.gif");
  gif2Image = loadImage("assets/images/end2.gif");

  rainSFX = loadSound("assets/sounds/rain.wav");
  splashSFX = loadSound("assets/sounds/splash.wav");
  thunderSFX = loadSound("assets/sounds/thunder.wav");
}

// Identifying all variables for start and end gifs
let start = {
  x: undefined,
  y: undefined,
  width: 720,
  height: 444,
};

let gif1 = {
  x: undefined,
  y: undefined,
  width: 720,
  height: 444,
};

let gif2 = {
  x: undefined,
  y: undefined,
  width: 720,
  height: 444,
};

let state = `title`; // Can be: title, simulation, end1, end2

/**
Creating canvas, adding paddle into simulation, displaying suns and clouds in
simulation
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
Adding blue background, noise on background and identifying states
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

// Title state
function title() {
  push();
  fill(255);
  textSize(60);
  textAlign(CENTER, CENTER);
  text(`The Weather is in Your Hands`, windowWidth / 2, windowHeight / 6);
  pop();
  textFont('Special Elite');
  fill(255);
  textSize(30);
  textAlign(CENTER, CENTER);
  text(`Control the puddle with the mouse to keep the items in the air`, windowWidth / 2, windowHeight / 3.7);
  text(`Press 'C' to add clouds   |   Press 'S' to add suns`, windowWidth / 2, windowHeight / 1.35);
  push();
  fill(255);
  textSize(45);
  textAlign(CENTER, CENTER);
  text(`Click to start`, windowWidth / 2, windowHeight / 1.2);
  pop();
  displayStart();
}

// Game playing state
function simulation() {
  paddle.move();
  paddle.display();
  createClouds();
  createSuns();
}

// State that appeats when cloud falls out of frame
function end1() {
  fill(255);
  textSize(40);
  textAlign(CENTER, CENTER);
  textFont('Special Elite');
  text(`It was being kept under control, but now`, windowWidth / 2, windowHeight / 3.7);
  text(`the fog is stopping you from going out… Stay safe!`, windowWidth / 2, windowHeight / 1.35);
  displayGif1();
}

// State that appeats when sun falls out of frame
function end2() {
  fill(255);
  textSize(40);
  textAlign(CENTER, CENTER);
  textFont('Special Elite');
  text(`You couldn’t manage to keep the sun up,`, windowWidth / 2, windowHeight / 3.7);
  text(`another gloomy day ahead… Keep yourself busy inside!`, windowWidth / 2, windowHeight / 1.35);
  displayGif2();
}

// Creating clouds and adding all methods that control them
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

// Creating suns and adding all methods that control them
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

// Pressing 'S' key will add a new sun in mouse position
function keyPressed() {
  if (keyCode === 83) {
    let x = mouseX;
    let y = mouseY;
    let sun = new Sun(x, y, sunImage, splashSFX, thunderSFX);
    suns.push(sun);
  }

  // Pressing 'C' key will add a new sun in mouse position
  if (keyCode === 67) {
    let x = mouseX;
    let y = mouseY;
    let cloud = new Cloud(x, y, cloudImage, splashSFX, thunderSFX);
    clouds.push(cloud);
  }
}

// Clicking anywhere on the screen in the title state begins simulation
function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
  rainSFX.loop();
}

// Displaying all gifs that appear on title and end states
function displayStart() {
  image(startImage, width / 2, height / 2, start.width, start.height);
  imageMode(CENTER, CENTER);
}

function displayGif1() {
  image(gif1Image, width / 2, height / 2, gif1.width, gif1.height);
  imageMode(CENTER, CENTER);
}

function displayGif2() {
  image(gif2Image, width / 2, height / 2, gif2.width, gif2.height);
  imageMode(CENTER, CENTER);
}
