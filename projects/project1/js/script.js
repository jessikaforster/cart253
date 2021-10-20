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
let newsSFX;
let upSFX;
let familyImage;
let healthImage;
let hobbyImage;
let covidImage;
let schoolImage;
let startImage;
let familyendImage;
let healthendImage;
let hobbyendImage;
let covidendImage;
let schoolendImage;
let bg;

function preload() {
  familyImage = loadImage("assets/images/family.png");
  healthImage = loadImage("assets/images/mentalh.png");
  hobbyImage = loadImage("assets/images/hobbies.png");
  covidImage = loadImage("assets/images/covid.png");
  schoolImage = loadImage("assets/images/school.png");
  startImage = loadImage("assets/images/start.png");
  familyendImage = loadImage("assets/images/family-end.png");
  healthendImage = loadImage("assets/images/health-end.png");
  hobbyendImage = loadImage("assets/images/hobby-end.png");
  covidendImage = loadImage("assets/images/covid-end.png");
  schoolendImage = loadImage("assets/images/school-end.png");
  bg = loadImage("assets/images/background.gif");
  upSFX = loadSound("assets/sounds/up.wav");
  newsSFX = loadSound("assets/sounds/news.wav");
}

let family = {
  x: 0,
  y: 0,
  width: 400,
  height: 400,
  vy: 1,
  vx: 0,
  ay: 0.7,
  speed: 1,
};

let health = {
  x: 500,
  y: 0,
  width: 400,
  height: 400,
  vy: 1,
  vx: 0,
  ay: 0.2,
  speed: 3,
};

let hobby = {
  x: 900,
  y: 0,
  width: 430,
  height: 430,
  vy: 1,
  vx: 0,
  ay: 1.2,
  speed: 3,
};

let covid = {
  x: 1300,
  y: 0,
  width: 400,
  height: 400,
  vy: 1,
  vx: 0,
  ay: 1,
  speed: 3,
};

let school = {
  x: 1700,
  y: 0,
  width: 300,
  height: 300,
  vy: 1,
  vx: 0,
  ay: 0.4,
  speed: 3,
};

let start = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
};

let familyend = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
};

let healthend = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
};

let hobbyend = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
};

let covidend = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
};

let schoolend = {
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
  createCanvas(windowWidth, windowHeight);
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
  playSound();
}

function end1() {
displayEnd1();
}

function end2() {
  displayEnd2();
}

function end3() {
  displayEnd3();
}

function end4() {
  displayEnd4();
}

function end5() {
  displayEnd5();
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

function displayEnd1() {
  image(familyendImage, familyend.x, familyend.y, windowWidth, windowHeight);
}

function displayEnd2() {
  image(healthendImage, healthend.x, healthend.y, windowWidth, windowHeight);
}

function displayEnd3() {
  image(hobbyendImage, hobbyend.x, hobbyend.y, windowWidth, windowHeight);
}

function displayEnd4() {
  image(covidendImage, covidend.x, covidend.y, windowWidth, windowHeight);
}

function displayEnd5() {
  image(schoolendImage, schoolend.x, schoolend.y, windowWidth, windowHeight);
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
    family.vy = -20 * family.ay;
  }
  else {
    family.vy = 2 * 1.2;
  }

  if (keyIsDown(86)) {
    health.vy = -20 * health.ay;
  }
  else {
    health.vy = 2 * 1.7;
  }

  if (keyIsDown(66)) {
    hobby.vy = -20 * hobby.ay;
  }
  else {
    hobby.vy = 2;
  }

  if (keyIsDown(78)) {
    covid.vy = -20 * covid.ay;
  }
  else {
    covid.vy = 2 * 1.3;
  }

  if (keyIsDown(77)) {
    school.vy = -20 * school.ay;
  }
  else {
    school.vy = 2 * 1.5;
  }
}

// Play sound when key is pressed
function playSound() {
  if (keyIsPressed === true) {
    upSFX.loop();
  }
}

// Game ends when item hits floor
function checkOverlap() {
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
  newsSFX.loop();
}
