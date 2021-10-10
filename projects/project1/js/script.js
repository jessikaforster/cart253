/**
Project 1
Jessika Forster

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let circle = {
  x: 0,
  y: 0,
  size: 100,
  r: 155,
  g: 70,
  b: 55,
  speed: -3,
  speedX: 0,
  speedY: 0,
  vx: 0,
  vy: -2,
  gravity: 1,
  gravitySpeed: 0,
}

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
}


/**
Description of draw()
*/
function draw() {
background(0);
displayCircle();
circleGravity();
circleMovement();
}

function circleGravity() {
  circle.gravitySpeed += circle.gravity;
  circle.x += circle.speedX;
  circle.y += circle.speedY + circle.gravitySpeed;
}

function circleMovement() {
  circle.speed += circle.vy;
  circle.y += circle.speed - circle.vy
}

function displayCircle() {
ellipse(circle.x,circle.y,circle.size,circle.r,circle.g,circle.b);
circle.x = windowWidth/2;
circle.y = windowHeight/2;
}
