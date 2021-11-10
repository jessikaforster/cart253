/**
Project 2 Prototype
Jessika Forster

Prototype for project 2, final CART 253 project.
*/

"use strict";

let state = `simulation`; // Could be simulation or failed

let birds = [];
let numBluejays = 5;
let numSparrows = 5;
let numCardinals = 5;

let user;

let bg;

let userImage = undefined;

let bluejayImage = undefined;
let cardinalImage = undefined;
let sparrowImage = undefined;

/**
Description of preload
*/
function preload() {
  bluejayImage = loadImage("assets/images/bluejay.gif");
  cardinalImage = loadImage("assets/images/cardinal.gif");
  sparrowImage = loadImage("assets/images/sparrow.gif");

  userImage = loadImage("assets/images/reindeer.gif");

  bg = loadImage("assets/images/bg.gif");
}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth,windowHeight);

  let x = width/6;
  let y = height/2;
  user = new User(x,y,userImage);

  for (let i = 0; i < numBluejays; i++) {
  let x = random(width/2,width);
  let y = random(0,height);
  let bluejay = new Bluejay(x,y,bluejayImage);
  birds.push(bluejay);
}

for (let i = 0; i < numSparrows; i++) {
  let x = random(width/2,width);
  let y = random(0,height);
  let sparrow = new Sparrow(x,y,sparrowImage);
  birds.push(sparrow);
}

for (let i = 0; i < numCardinals; i++) {
  let x = random(width/2,width);
  let y = random(0,height);
  let cardinal = new Cardinal(x,y,cardinalImage);
  birds.push(cardinal);
}

for (let i = 0; i < birds.length; i++) {
    let bird = birds[i];
      bird.vx = -bird.speed;
  }
}


/**
Description of draw()
*/
function draw() {
background(bg);

if (state === `simulation`) {
    simulation();
  }
  else if (state === `failed`) {
    failed();
  }
}

function simulation() {
  user.display();

  if (!user.dodged) {
    state = `failed`;
  }

  for (let i = 0; i < birds.length; i++) {
    let bird = birds[i];
  bird.move();
  bird.wrap();
  bird.display();
  bird.wiggle();

  user.checkHit(bird);
  }
}

function failed() {
  displayText(`YOU DIDN'T DODGE AND GOT HIT, BETTER LUCK NEXT TIME!`)
}

function displayText(string) {
  push();
  textAlign(CENTER,CENTER);
  textSize(32);
  fill(255);
  text(string,width/2,height/2);
  pop();
}
