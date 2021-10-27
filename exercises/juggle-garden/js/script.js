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

let ss1Image;

let paddle;

/**
Description of preload
*/
function preload() {
sunImage = loadImage("assets/images/sun.png");
cloudImage = loadImage("assets/images/cloud.png");

ss1Image = loadImage("assets/images/ss1.png");

/* hs1Image = loadImage("assets/images/hs1.png");
hs2Image = loadImage("assets/images/hs2.png");
hs3Image = loadImage("assets/images/hs3.png");
hs4Image = loadImage("assets/images/hs4.png");
hs5Image = loadImage("assets/images/hs5.png");
hs6Image = loadImage("assets/images/hs6.png");
hs7Image = loadImage("assets/images/hs7.png");
hs8Image = loadImage("assets/images/hs8.png");
hs9Image = loadImage("assets/images/hs9.png");
hs10Image = loadImage("assets/images/hs10.png");


ss2Image = loadImage("assets/images/ss2.png");
ss3Image = loadImage("assets/images/ss3.png");
ss4Image = loadImage("assets/images/ss4.png");
ss5Image = loadImage("assets/images/ss5.png");
ss6Image = loadImage("assets/images/ss6.png");
ss7Image = loadImage("assets/images/ss7.png");
ss8Image = loadImage("assets/images/ss8.png");
ss9Image = loadImage("assets/images/ss9.png");
ss10Image = loadImage("assets/images/ss10.png"); */
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

let ss1 = {
x: 0,
y: 0,
width: 500,
height: 500,
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
  displaySs1();
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

/* function displayHs1() {

}

function displayHs2() {

}

function displayHs3() {

}

function displayHs4() {

}

function displayHs5() {

}

function displayHs6() {

}

function displayHs7() {

}

function displayHs8() {

}

function displayHs9() {

}

function displayHs10() {

} */

function displaySs1() {
  image(ss1Image, width/3, height/2, ss1.width, ss1.height);
}

/* function displaySs2() {

}

function displaySs3() {

}

function displaySs4() {

}

function displaySs5() {

}

function displaySs6() {

}

function displaySs7() {

}

function displaySs8() {

}

function displaySs9() {

}

function displaySs10() {

} */
