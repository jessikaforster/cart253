/**
Project 2 Prototype
Jessika Forster

Project 2, final CART 253 project.
*/

"use strict";

let state = `level2`; /* Could be start, intro, level1, level1Fail, level2,
level2Fail, level3, level3Fail, level4, level4Fail, level5, level5Fail, level6, level6Fail, level7, final */

// Array to display all 3 kinds of birds: LEVEL 1
let birds = [];
let numBluejays = 3;
let numSparrows = 3;
let numCardinals = 3;

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
let fallingGifts = [];
let numGifts = 15;
let numCandycanes = 20;

// Declaring all images that will be used : LEVEL 2
let stocking;

let stockingImage = undefined;

let giftImage = undefined;
let candycaneImage = undefined;

// Declaring all images that will be used : LEVEL 3
let level3Image;

let userL3;

// Array to display civilians : LEVEL 3
let civilians = [];
let numCivilians = 5;

// Declaring all images that will be used : LEVEL 4
let fallingElfImage;
let movingBrick;

let fallingElf;

let mouseImage = undefined;
let raccoonImage = undefined;

// Arrays to display falling candycanes and gifts: LEVEL 4
let animals = [];
let numMice = 3;
let numRaccoons = 3;

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


// An array of the strings (in order) our dialog box will display,
// one at a time
let dialogStrings = [
  `Santa: Alright great job everyone, it looks like another Christmas will pass successfully`,
  `Head Elf: Um…Santa actually…There’s 1 gift that wasn’t delivered`,
  `Santa: WHAT?! Where’s the new elf?`,
  `Head Elf: Here Santa sir`,
  `Santa:	Now’s your chance to get on my good list, find the missing gift and deliver it successfully to save Christmas!`
];
// The index of the current string to display, starts at 0 so we
// display the first string first!
let currentDialogString = 0;

// An object representing our dialog box
let dialogBox = {
  // Position on screen (will set in setup())
  x: undefined,
  y: undefined,
  // Current string to display (starts empty)
  string: ``,
  // Whether it's currently visible on the canvas
  visible: false,
  // Dimensions
  width: 500,
  height: 300,
  // Padding
  padding: 20,
  // How long the dialog box should display before auto-closing
  duration: 3000
};

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
  level1EndImage = loadImage("assets/images/level1/level1-end.jpg");
  level2EndImage = loadImage("assets/images/level2/level2-end.jpg");
  level3EndImage = loadImage("assets/images/level3/level3-end.jpg");
  level4EndImage = loadImage("assets/images/level4/level4-end.jpg");
  level5EndImage = loadImage("assets/images/level5/level5-end.jpg");

  // Loading final ending image
  finalImage = loadImage("assets/images/final.jpg");
}

/**
Creating the canvas to fill the user's window size
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  dialogBox.x = width/6;
  dialogBox.y = height/1.15;

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
    fallingGifts.push(candycane);
  }

  for (let i = 0; i < numGifts; i++) {
    let x = random(0, width);
    let y = random(0, height / 2);
    let gift = new GiftL2(x, y, giftImage);
    fallingGifts.push(gift);
  }

  for (let i = 0; i < fallingGifts.length; i++) {
    let fallingGift = fallingGifts[i];
    fallingGift.vy = fallingGift.speed;
  }

// Setup : LEVEL 3
  for (let i = 0; i < numCivilians; i++) {
    let x = random(width / 2, width);
    let y = random(0, height);
    let civilian = new CivilianL3(x, y);
    civilians.push(civilian);
  }

  userL3 = new UserL3(x, y);

/* Setup for LEVEL 4 */
// Displaying falling elf image: LEVEL 4
fallingElf = new FallingElfL4(fallingElfImage);

// Displaying raccoons using for loop
for (let i = 0; i < numRaccoons; i++) {
  let x = random(0, width);
  let y = random(0, height/6);
  let raccoon = new RaccoonL4(x, y, raccoonImage);
  animals.push(raccoon);
}

// Displaying mice using for loop
for (let i = 0; i < numMice; i++) {
  let x = random(0, width);
  let y = random(0, height/6);
  let mouse = new MouseL4(x, y, mouseImage);
  animals.push(mouse);
}

// Declaring the direction and speed that the animals will move in
for (let i = 0; i < animals.length; i++) {
  let animal = animals[i];
  animal.vy = animal.speed;
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
    level1();
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
displayDialog();
keyPressed();
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
  keyPressed();
}

function level2() {
  background(snowfall);

  stocking.handleInput();
  stocking.display();
  stocking.move();

  let numActiveFallingGifts = 0;

  for (let i = 0; i < fallingGifts.length; i++) {
    let fallingGift = fallingGifts[i];
    if (fallingGift.active) {
    numActiveFallingGifts++;
    fallingGift.move();
    fallingGift.wrap();
    }
    fallingGift.display();
    fallingGift.checkGift(stocking);
    // fallingGift.numItems();
}

if (numActiveFallingGifts === 0) {
  state = `level3`;
}
}

function level2Fail() {
background(level2EndImage);
}

function level3() {
background(level3Image);

for (let i = 0; i < civilians.length; i++) {
  let civilian = civilians[i];
civilian.move();
civilian.display();
userL3.checkDist(civilian);
  }

userL3.move();
userL3.handleInput();
userL3.display();
userL3.checkExit();
}

function level3Fail() {
background(level3EndImage);
for (let i = 0; i < civilians.length; i++) {
  let civilian = civilians[i];
userL3.keyPressed(civilian);
  }
}

function level4() {
background(movingBrick);

// Display falling elf image
fallingElf.display();

// If user gets hit by an animal, `failed` state is triggered
if (!fallingElf.dodged) {
  state = `level4Fail`;
}

// For loop to create all of the birds along with all statements from Bird class
for (let i = 0; i < animals.length; i++) {
  let animal = animals[i];
  animal.move();
  animal.wrap();
  animal.display();
  animal.numDodges();
  animal.checkExit();

  // User control
  fallingElf.handleInput();
  fallingElf.checkHit(animal);
}
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

/**
Displays a dialog box and text according to the current settings
*/
function displayDialog() {
  // We only display the dialog box if it's set to be visible
  if (dialogBox.visible) {
    // First draw the box part
    push();
    // Make it easier to centre the box
    rectMode(CENTER);
    // Red outline
    stroke(255,0,0);
    // Thicker than usual
    strokeWeight(5);
    // Draw a rectangle based on the box's position and dimensions
    rect(dialogBox.x, dialogBox.y, dialogBox.width, dialogBox.height);
    pop();

    // Now draw the text inside the box
    push();
    // Remember that the box part used rectMode(CENTER) so we need it
    // here too, since we're using a special kind of text() that can
    // automatically fit inside a defined rectangle
    rectMode(CENTER);
    // Display the current string at the same position as the box
    // and with the same dimensions, except we'll subtract the
    // padding so the text sits more nicely inside the box
    // The last two arguments here defined the size of the imaginary
    // rectangle to fit the text in (it will create the linebreaks
    // for us, which is nice)
    textSize(30);
    textFont(`Architects Daughter`);
    text(dialogBox.string, dialogBox.x, dialogBox.y, dialogBox.width - dialogBox.padding, dialogBox.height - dialogBox.padding);
    pop();
  }
}

/**
Displays the dialog box if it's not already visible
*/
function mousePressed() {
  // We display the dialog box if the mouse gets clicked
  // but only if it isn't already visible
  if (!dialogBox.visible) {
    // Set it to visible to it displays
    dialogBox.visible = true;
    // Set the string in the dialog box to the current string
    dialogBox.string = dialogStrings[currentDialogString];
    // Set a timer to hide the dialog box by calling the hideDialog()
    // function after the number of milliseconds specified by
    // the dialog box's duration property
    setTimeout(hideDialog, dialogBox.duration);
  }

  if (state === `start`) {
    state = `intro`;
  }
}

/**
Hides the dialog box and sets it up for the next appearance as
needed. Called after a delay.
*/
function hideDialog() {
  // Set the dialog to be invisible
  dialogBox.visible = false;
  // Increase the string index by one so we display the next one
  // next time
  currentDialogString += 1;
  // But if we hit the end of the array of strings, then just
  // stay on the final string
  if (currentDialogString >= dialogStrings.length) {
    currentDialogString = dialogStrings.length - 1;
  }
}

function keyPressed() {
  if (keyCode === 32) {
    if (state === `intro`) {
      state = `level1`;
    }
  }
}
