/**
Juggle Garden
Jessika Forster

This is the 5th CART 253 exercise. The objectives are to work with object-oriented
programming, interacting objects and input in OOP. This simulation should include
another form of user-control, a new class and objects and at least 2 endings.
*/

"use strict";

let suns = [];
let numSuns = 10;
let clouds = [];
let numClouds = 10;

let sunImage = undefined;
let cloudImage = undefined;

/**
Description of preload
*/
function preload() {
sunImage = loadImage("assets/images/sun.png");
cloudImage = loadImage("assets/images/cloud.png");
}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
}


/**
Description of draw()
*/
function draw() {
  background(0);
}
