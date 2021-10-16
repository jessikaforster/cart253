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
let startImage;
let bg;

function preload() {
  familyImage = loadImage("assets/images/family.png");
  healthImage = loadImage("assets/images/mentalh.png");
  hobbyImage = loadImage("assets/images/hobbies.png");
  covidImage = loadImage("assets/images/covid.png");
  schoolImage = loadImage("assets/images/school.png");
  startImage = loadImage("assets/images/start.png");
  bg = loadImage("assets/images/background.gif");
}

let family = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  vy: 0,
  vx: 0,
};

let health = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  vy: 0,
  vx: 0,
};

let hobby = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  vy: 0,
  vx: 0,
};

let covid = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  vy: 0,
  vx: 0,
};

let school = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  vy: 0,
  vx: 0,
};

let start = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
};

let state = `title`; // Can be: title, simulation, love, sadness

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
circleMovement();
handleInput();
displayItems();

// Identifying all states
if (state === `title`) {
  title();
  }
else if (state === `simulation`) {
  simulation();
  }
else if (state === `family`) {
  family();
  }
else if (state === `health`) {
  health();
  }
else if (state === `hobby`) {
  hobby();
  }
else if (state === `covid`) {
  covid();
  }
else if (state === `school`) {
  school();
  }
}

function title() {
  displayStart();
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

function displayStart() {
  image(startImage,start.x,start.y,windowWidth,windowHeight);
}

function displayItems() {
  image(familyImage,family.x,family.y,family.width,family.height);
  image(healthImage,health.x,health.y,health.width,health.height);
  image(hobbyImage,hobby.x,hobby.y,hobby.width,hobby.height);
  image(covidImage,covid.x,covid.y,covid.width,covid.height);
  image(schoolImage,school.x,school.y,school.width,school.height);
}
