/**
Project 2 Prototype
Jessika Forster

Prototype for project 2, final CART 253 project.
*/

"use strict";

let birds = [];
let numBluejays = 10;
let numSparrows = 10;
let numCardinals = 10;

let bg;

let userImage;

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
}


/**
Description of draw()
*/
function draw() {
background(bg);
}
