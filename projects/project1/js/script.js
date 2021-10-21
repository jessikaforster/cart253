/**
Project 1
Jessika Forster

1st CART 253 project. The objectives are to work on a larger programming project, handle different forms of user
input, organizing code with functions, making things interesting with conditionals and variables and combining
aesthetics, interaction and concept.
*/

"use strict";

// Loading all images and sounds into code
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

// Identifying all variables
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
  width: 450,
  height: 450,
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
  width: 350,
  height: 350,
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

let state = `title`; // Can be: title, simulation, end1, end2, end3, end4, end5

// Setting up canvas size
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// Displaying background gif and identifying all states
function draw() {
  background(bg);

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

// Starting state, title
function title() {
  displayStart();
}

// Game playing state
function simulation() {
  displayItems();
  handleInput();
  gravity();
  checkOverlap();
  randomMove();
}

// End triggered by family (heart) hitting the bottom
function end1() {
  displayEnd1();
}

// End triggered by mental health (brain) hitting the bottom
function end2() {
  displayEnd2();
}

// End triggered by hobbies (paint palette) hitting the bottom
function end3() {
  displayEnd3();
}

// End triggered by COVID-19 (blue virus) hitting the bottom
function end4() {
  displayEnd4();
}

// End triggered by school (books) hitting the bottom
function end5() {
  displayEnd5();
}

// Gravity being applied to all user-controlled items
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

// Random movement applied to all user-controlled items
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

// Display start image, all ending images and all user-controlled items
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

// When C, V, B, N, M keys are pressed, the corresponding user-controlled items move up
function handleInput() {
  if (keyIsDown(67)) {
    family.vy = -15 * family.ay;
  } else {
    family.vy = 4 * 1.2;
  }

  if (keyIsDown(86)) {
    health.vy = -20 * health.ay;
  } else {
    health.vy = 6 * 1.7;
  }

  if (keyIsDown(66)) {
    hobby.vy = -20 * hobby.ay;
  } else {
    hobby.vy = 2;
  }

  if (keyIsDown(78)) {
    covid.vy = -15 * covid.ay;
  } else {
    covid.vy = 3 * 1.3;
  }

  if (keyIsDown(77)) {
    school.vy = -20 * school.ay;
  } else {
    school.vy = 5 * 1.5;
  }
}

// Game ends when item hits floor and end state is triggered
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

/* When any of the control keys are pressed, a sound effect is triggered and when the spacebar is pressed,
the title state is triggered and the game resets */
function keyPressed() {
  if (keyCode === 32) {
    reset();
    state = `title`
  }
  if (keyCode === 67) {
    upSFX.play();
  }
  if (keyCode === 86) {
    upSFX.play();
  }
  if (keyCode === 66) {
    upSFX.play();
  }
  if (keyCode === 78) {
    upSFX.play();
  }
  if (keyCode === 77) {
    upSFX.play();
  }
}

// Function to restart game when spacebar is pressed
function reset() {
  family.x = 0;
  family.y = 0;
  health.x = 500;
  health.y = 0;
  hobby.x = 900;
  hobby.y = 0;
  covid.x = 1300;
  covid.y = 0;
  school.x = 1700;
  school.y = 0;
}

// When mouse is pressed, state changes from title to simulation and sound begins playing
function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
  newsSFX.loop();
}
