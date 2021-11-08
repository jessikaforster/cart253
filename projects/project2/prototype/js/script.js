/**
Project 2 Prototype
Jessika Forster

Prototype for project 2, final CART 253 project.
*/

"use strict";

let birds = [];
let numBluejays = 3;
let numSparrows = 3;
let numCardinals = 3;

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

  userImage = loadImage("assets/images/reindeer.png");

  bg = loadImage("assets/images/bg.gif");
}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth,windowHeight);

  /* let x = width/6;
  let y = height/2;
  user = new User(x,y,userImage); */

  for (let i = 0; i < numBluejays; i++) {
  let x = random(0,width);
  let y = random(0,height);
  let bluejay = new Bluejay(x,y,bluejayImage);
  birds.push(bluejay);
}

for (let i = 0; i < numSparrows; i++) {
  let x = random(0,width);
  let y = random(0,height);
  let sparrow = new Sparrow(x,y,sparrowImage);
  birds.push(sparrow);
}

for (let i = 0; i < numCardinals; i++) {
  let x = random(0,width);
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

// user.display();

for (let i = 0; i < birds.length; i++) {
    let bird = birds[i];
  bird.move();
  bird.wrap();
  bird.display();
  }
}
