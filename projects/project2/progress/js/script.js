/**
Project 2 Prototype
Jessika Forster

Project 2, final CART 253 project.
*/

"use strict";

let state = `final`; /* Could be start, intro, level1, level1Fail, level2,
level2Fail, level3, level3Fail, level4, level4Fail, level5, level5Fail, level6, level6Fail, level7, final */

// Array to display all 3 kinds of birds: LEVEL 1
let birds = [];
let numBluejays = 5;
let numSparrows = 5;
let numCardinals = 5;

// Declaring all images that will be used : start
let startImage;

// Declaring all images that will be used : intro
let introAnim;

// Declaring all images that will be used : LEVEL 1
let sleigh;

let snowfall;

let sleighImage = undefined;

let bluejayImage = undefined;
let cardinalImage = undefined;
let sparrowImage = undefined;

// Arrays to display falling candycanes and gifts: LEVEL 2
let candycanes = [];
let gifts = [];
let numGifts = 5;
let numCandycanes = 5;

// Declaring all images that will be used : LEVEL 2
let stocking;

let stockingImage = undefined;

let giftImage = undefined;
let candycaneImage = undefined;

// Declaring all images that will be used : LEVEL 3
let level3Image;


// Declaring all images that will be used : LEVEL 4
let fallingElfImage;
let movingBrick;

let mouseImage = undefined;
let raccoonImage = undefined;

// Arrays to display falling candycanes and gifts: LEVEL 4
let mice = [];
let raccoons = [];
let numMice = 5;
let numRaccoons = 5;

// Declaring all images that will be used : LEVEL 5
let fireImage;
let stillBrick;

let snowflakeImage;

// Declaring all images that will be used : LEVEL 6
let scrollImage;

// Declaring all images that will be used : LEVEL 7
let finalGiftImage;
let treeImage;

// Declaring all ending state images
let level1EndImage;
let level2EndImage;
let level3EndImage;
let level4EndImage;
let level5EndImage;

// Declaring final image
let finalImage;

// Loading all images to be used into code
function preload() {

  // Loading start screen image
  startImage = loadImage("assets/images/start.jpg");

  // Loading intro animation
  introAnim = loadImage("assets/images/intro.gif");

  // Loading images to be used into code : LEVEL 1
  bluejayImage = loadImage("assets/images/level1/bluejay.gif");
  cardinalImage = loadImage("assets/images/level1/cardinal.gif");
  sparrowImage = loadImage("assets/images/level1/sparrow.gif");

  sleighImage = loadImage("assets/images/level1/reindeer.gif");

  snowfall = loadImage("assets/images/bg.gif");

  // Loading images to be used into code : LEVEL 2
  giftImage = loadImage("assets/images/level2/level2Gift.png");
  candycaneImage = loadImage("assets/images/level2/candycane.png");

  stockingImage = loadImage("assets/images/level2/stocking.png");

  // Loading images to be used into code : LEVEL 3
  level3Image = loadImage("assets/images/level3/level3Bg.jpg");

  // Loading images to be used into code : LEVEL 4
  fallingElfImage = loadImage("assets/images/level4/fallingelf.gif");

  mouseImage = loadImage("assets/images/level4/mouse.png");
  raccoonImage = loadImage("assets/images/level4/raccoon.png");

  movingBrick = loadImage("assets/images/level4/movingbrick.gif");

  // Loading images to be used into code : LEVEL 5
  fireImage = loadImage("assets/images/level5/fire.gif");
  stillBrick = loadImage("assets/images/level5/stillbrick.gif");

  snowflakeImage = loadImage("assets/images/level5/snowflake.png");

  // Loading images to be used into code : LEVEL 6
  scrollImage = loadImage("assets/images/level6/scroll.jpg");

  // Loading images to be used into code : LEVEL 7
  finalGiftImage = loadImage("assets/images/level7/finalgift.png");

  treeImage = loadImage("assets/images/level7/tree.gif");

  // Loading all ending state images
  level1EndImage = loadImage("assets/images/level1/level1-end.png");
  level2EndImage = loadImage("assets/images/level2/level2-end.png");
  level3EndImage = loadImage("assets/images/level3/level3-end.jpg");
  level4EndImage = loadImage("assets/images/level4/level4-end.png");
  level5EndImage = loadImage("assets/images/level5/level5-end.png");

  // Loading final ending image
  finalImage = loadImage("assets/images/final.jpg");
}

/**
Creating the canvas to fill the user's window size
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  /* Setup for LEVEL 1 */
  // Displaying sleigh image: LEVEL 1
  let x = width / 6;
  let y = height / 2;
  sleigh = new SleighL1(x, y, sleighImage);

  // Displaying bluejays using for loop
  for (let i = 0; i < numBluejays; i++) {
    let x = random(width / 2, width);
    let y = random(0, height);
    let bluejay = new BluejayL1(x, y, bluejayImage);
    birds.push(bluejay);
  }

  // Displaying sparrows using for loop
  for (let i = 0; i < numSparrows; i++) {
    let x = random(width / 2, width);
    let y = random(0, height);
    let sparrow = new SparrowL1(x, y, sparrowImage);
    birds.push(sparrow);
  }

  // Displaying cardinals using for loop
  for (let i = 0; i < numCardinals; i++) {
    let x = random(width / 2, width);
    let y = random(0, height);
    let cardinal = new CardinalL1(x, y, cardinalImage);
    birds.push(cardinal);
  }

  // Declaring the direction and speed that the birds will move in
  for (let i = 0; i < birds.length; i++) {
    let bird = birds[i];
    bird.vx = bird.speed;
  }

  /* Setup for LEVEL 2 */
  // Displaying stocking image: LEVEL 2
  stocking = new StockingL2(stockingImage);

  for (let i = 0; i < numCandycanes; i++) {
    let x = random(0, width);
    let y = random(0, height / 2);
    let candycane = new CandycaneL2(x, y, candycaneImage);
    candycanes.push(candycane);
  }

  for (let i = 0; i < candycanes.length; i++) {
    let candycane = candycanes[i];
    candycane.vy = candycane.speed;
  }

  for (let i = 0; i < numGifts; i++) {
    let x = random(0, width);
    let y = random(0, height / 2);
    let gift = new GiftL2(x, y, giftImage);
    gifts.push(gift);
  }

  for (let i = 0; i < gifts.length; i++) {
    let gift = gifts[i];
    gift.vy = gift.speed;
  }
}
/**
Displaying the background image and creating simulation, failed and success states
*/
function draw() {

  if (state === `start`) {
    start();
  } else if (state === `intro`) {
    intro();
  } else if (state === `level1`) {
    level1Fail();
  } else if (state === `level1Fail`) {
    level1Fail();
  } else if (state === `level2`) {
    level2();
  } else if (state === `level2Fail`) {
    level2Fail();
  } else if (state === `level3`) {
    level3();
  } else if (state === `level3Fail`) {
    level3Fail();
  } else if (state === `level4`) {
    level4();
  } else if (state === `level4Fail`) {
    level4Fail();
  } else if (state === `level5`) {
    level5();
  } else if (state === `level5Fail`) {
    level5Fail();
  } else if (state === `level6`) {
    level6();
  } else if (state === `level6Fail`) {
    level6Fail();
  } else if (state === `level7`) {
    level7();
  } else if (state === `final`) {
    final();
  }
}

function start() {
background(startImage);
}

function intro() {
background(introAnim);
}

/* Level 1 state */
function level1() {
  background(snowfall);
  // Display user image
  sleigh.display();

  // If user gets hit by a bird, `failed` state is triggered
  if (!sleigh.dodged) {
    state = `level1Fail`;
  }

  // For loop to create all of the birds along with all statements from Bird class
  for (let i = 0; i < birds.length; i++) {
    let bird = birds[i];
    bird.move();
    bird.wrap();
    bird.display();
    bird.wiggle();
    bird.numDodges();
    bird.checkExit();

    // User control
    sleigh.handleInput();
    sleigh.checkHit(bird);
  }
}

// State that appears when user fails to dodge a bird
function level1Fail() {
  background(level1EndImage);
}

function level2() {
  background(snowfall);

  stocking.handleInput();
  stocking.display();
  stocking.move();

  for (let i = 0; i < candycanes.length; i++) {
    let candycane = candycanes[i];
    candycane.move();
    candycane.wrap();
    candycane.display();
  }

  for (let i = 0; i < gifts.length; i++) {
    let gift = gifts[i];
    gift.move();
    gift.wrap();
    gift.display();
  }
}

function level2Fail() {
background(level2EndImage);
}

function level3() {
background(level3Image);
}

function level3Fail() {
background(level3EndImage);
}

function level4() {
background(movingBrick);
}

function level4Fail() {
background(level4EndImage);
}

function level5() {
background(stillBrick);
}

function level5Fail() {
background(level5EndImage);
}

function level6() {
background(scrollImage);
}

function level6Fail() {

}

function level7() {
background(treeImage);
}

function final() {
background(finalImage);
}

// State that appears when user has successfully dodged enough birds
function success() {
  background(snowfall);
  displayText(`YOU DODGED THE FLOCK OF BIRDS SUCCESSFULLY! THERE'S NO TIME TO CELEBRATE, WE NEED TO HURRY!`)
}

// All characteristics of the text (size, colour, etc.) to be reused in functions
function displayText(string) {
  push();
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);
  text(string, width / 2, height / 2);
  pop();
}
