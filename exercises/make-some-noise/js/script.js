/**
Make Some Noise
Jessika Forster

The core objective of this exercise is to spend time both experimenting with
the p5.sound library and its possibilities (most obviously playing with sound
files, oscillators, synthesizers, and audio input) alongside achieving a
milestone in your final project.
*/

"use strict";


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

  let x = width/2;
  let y = height;
  user = new User(x,y);
}


/**
Description of draw()
*/
function draw() {
  background(0);
}
