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
  width: 250,
  height: 250,
  vy: 1,
  vx: 0,
  speed: 1,
};

let health = {
  x: 400,
  y: 0,
  width: 250,
  height: 250,
  vy: 1,
  vx: 0,
  speed: 3,
};

let hobby = {
  x: 800,
  y: 0,
  width: 250,
  height: 250,
  vy: 1,
  vx: 0,
  speed: 3,
};

let covid = {
  x: 1200,
  y: 0,
  width: 250,
  height: 250,
  vy: 1,
  vx: 0,
  speed: 3,
};

let school = {
  x: 1600,
  y: 0,
  width: 250,
  height: 250,
  vy: 1,
  vx: 0,
  speed: 3,
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
  createCanvas(1800, 1110);
}


/**
Description of draw()
*/
function draw() {
  background(bg);
  // checkOverlap();

  // Identifying all states
  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `end1`) {
    end1();
  } else if (state === `end2`) {
    end2();
  } else if (state === `end3`) {
    end3();
  } else if (state === `end4`) {
    end4();
  } else if (state === `end5`) {
    end5();
  }
}

function title() {
  displayStart();
}

function simulation() {
  displayItems();
  handleInput();
  gravity();
  checkOverlap();
  randomMove();
}

function end1() {
textSize(30);
fill(255);
textAlign(CENTER,CENTER);
text(`family`,width/2,385);
}

function end2() {
  textSize(30);
  fill(255);
  textAlign(CENTER,CENTER);
  text(`health`,width/2,385);
}

function end3() {
  textSize(30);
  fill(255);
  textAlign(CENTER,CENTER);
  text(`hobby`,width/2,385);
}

function end4() {
  textSize(30);
  fill(255);
  textAlign(CENTER,CENTER);
  text(`covid`,width/2,385);
}

function end5() {
  textSize(30);
  fill(255);
  textAlign(CENTER,CENTER);
  text(`school`,width/2,385);
}

function gravity() {
  family.y += family.vy;
  family.x += family.vx;
  family.y = constrain(family.y, 0, windowHeight);
  family.x = constrain(family.x, 0, windowWidth);

  health.y += health.vy;
  health.x += health.vx;
  health.y = constrain(health.y, 0, windowHeight);
  health.x = constrain(health.x, 0, windowWidth);

  hobby.y += hobby.vy;
  hobby.x += hobby.vx;
  hobby.y = constrain(hobby.y, 0, windowHeight);
  hobby.x = constrain(hobby.x, 0, windowWidth);

  covid.y += covid.vy;
  covid.x += covid.vx;
  covid.y = constrain(covid.y, 0, windowHeight);
  covid.x = constrain(covid.x, 0, windowWidth);

  school.y += school.vy;
  school.x += school.vx;
  school.y = constrain(school.y, 0, windowHeight);
  school.x = constrain(school.x, 0, windowWidth);
}

function randomMove() {

  let change1 = random(0, 1);
  if (change1 < 0.05) {
    family.vx = random(-family.speed, family.speed);
    family.vy = random(-family.speed, family.speed);
  }

  let change2 = random(0, 1);
  if (change2 < 0.05) {
    health.vx = random(-health.speed, health.speed);
    health.vy = random(-health.speed, health.speed);
  }

  let change3 = random(0, 1);
  if (change3 < 0.05) {
    hobby.vx = random(-hobby.speed, hobby.speed);
    hobby.vy = random(-hobby.speed, hobby.speed);
  }

  let change4 = random(0, 1);
    if (change4 < 0.05) {
      covid.vx = random(-covid.speed, covid.speed);
      covid.vy = random(-covid.speed, covid.speed);
    }

  let change5 = random(0, 1);
    if (change5 < 0.05) {
      school.vx = random(-school.speed, school.speed);
      school.vy = random(-school.speed, school.speed);
    }
}

function displayStart() {
  image(startImage, start.x, start.y, windowWidth, windowHeight);
}

function displayItems() {
  image(familyImage, family.x, family.y, family.width, family.height);
  image(healthImage, health.x, health.y, health.width, health.height);
  image(hobbyImage, hobby.x, hobby.y, hobby.width, hobby.height);
  image(covidImage, covid.x, covid.y, covid.width, covid.height);
  image(schoolImage, school.x, school.y, school.width, school.height);
}

// Family controls and movement
function handleInput() {
  if (keyIsDown(67)) {
    family.vy = -20;
  }
  else {
    family.vy = 2;
  }

  if (keyIsDown(86)) {
    health.vy = -20;
  }
  else {
    health.vy = 2;
  }

  if (keyIsDown(66)) {
    hobby.vy = -20;
  }
  else {
    hobby.vy = 2;
  }

  if (keyIsDown(78)) {
    covid.vy = -20;
  }
  else {
    covid.vy = 2;
  }

  if (keyIsDown(77)) {
    school.vy = -20;
  }
  else {
    school.vy = 2;
  }
}

// Game ends when item hits floor
function checkOverlap () {
  if (family.y > 1110)
    state = `end1`;

  if (health.y > 1110)
    state = `end2`;

  if (hobby.y > 1110)
    state = `end3`;

  if (covid.y > 1110)
    state = `end4`;

  if (school.y > 1110)
    state = `end5`;
  }

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}
