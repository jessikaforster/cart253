/**
Make Some Noise
Jessika Forster

The core objective of this exercise is to spend time both experimenting with
the p5.sound library and its possibilities (most obviously playing with sound
files, oscillators, synthesizers, and audio input) alongside achieving a
milestone in your final project.
*/

"use strict";

let state = `simulation`; // Could be simulation or failed

let user;

let birds = [];
let numBluejays = 10;
let numSparrows = 10;
let numCardinals = 10;

let mic;

/**
Description of preload
*/
function preload() {


}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth,windowHeight);

  mic = new p5.AudioIn();
  mic.start();

  let x = width/6;
  let y = height/2;
  user = new User(x,y);

  for (let i = 0; i < numBluejays; i++) {
  let x = random(0,width);
  let y = random(0,height);
  let bluejay = new Bluejay(x,y);
  birds.push(bluejay);
}

for (let i = 0; i < numSparrows; i++) {
  let x = random(0,width);
  let y = random(0,height);
  let sparrow = new Sparrow(x,y);
  birds.push(sparrow);
}

for (let i = 0; i < numCardinals; i++) {
  let x = random(0,width);
  let y = random(0,height);
  let cardinal = new Cardinal(x,y);
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
  background(0);

  if (state === `simulation`) {
    simulation();
  }
  else if (state === `failed`) {
    failed();
  }
}

function simulation() {
let micLevel = mic.getLevel();
user.y = map(micLevel,0,2,0,height);

  push();
  textAlign(CENTER,CENTER);
  textSize(32);
  fill(255);
  text(micLevel,width/2,height/2);
  pop();

  user.display();
//  user.handleInput();

  if (!user.dodged) {
    state = `failed`;
  }

  for (let i = 0; i < birds.length; i++) {
    let bird = birds[i];
  bird.move();
  bird.wrap();
  bird.display();

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
