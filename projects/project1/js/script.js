/**
Project 1
Jessika Forster

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";



/**
Description of preload
*/
let familyImage;
let healthImage;
let hobbyImage;
let covidImage;
let schoolImage;
let bg;

function preload() {
  familyImage = loadImage("assets/images/family.png");
  healthImage = loadImage("assets/images/mentalh.png");
  hobbyImage = loadImage("assets/images/hobbies.png");
  covidImage = loadImage("assets/images/covid.png");
  schoolImage = loadImage("assets/images/school.png");
  bg = loadImage("assets/images/background.gif");
}

let family = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
};

let health = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
};

let hobby = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
};

let covid = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
};

let school = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
};

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
  vx: 5,
  vy: -3,
  gravity: 0.5,
  gravitySpeed: 0,
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
displayCircle();
circleMovement();
handleInput();
displayItems();
}

function handleInput() {
  if (keyIsDown(67)) {
    circle.y = circle.y - circle.vy;
  }
  else {
    circle.x += circle.vx;
    circle.y += circle.vy;
    circle.vy += circle.gravity;
  }
}

function circleMovement() {
       circle.x += circle.vx;
       circle.y += circle.vy;
       circle.vy += circle.gravity;
}

function displayItems() {
  image(familyImage,family.x,family.y,family.width,family.height);
  image(healthImage,health.x,health.y,health.width,health.height);
  image(hobbyImage,hobby.x,hobby.y,hobby.width,hobby.height);
  image(covidImage,covid.x,covid.y,covid.width,covid.height);
  image(schoolImage,school.x,school.y,school.width,school.height);
}

function displayCircle() {
ellipse(circle.x,circle.y,circle.size,circle.r,circle.g,circle.b);
circle.x = windowWidth/2;
circle.y = windowHeight/2;
}
