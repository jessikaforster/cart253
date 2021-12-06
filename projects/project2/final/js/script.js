/**
Project 2 Prototype
Jessika Forster

Project 2, final CART 253 project.
*/

"use strict";

let state = `level5`;
/* Could be start, intro, level1, level1Fail, level2, level3, level3Fail,
level4Intro, level4, level4Fail, level5, level5Fail, level6, level6Fail, level7, final */

// Declaring all images that will be used : START
let startImage;

// Declaring all images that will be used : INTRO
let introAnim;

// The lines that will appear in intro : INTRO
let dialogStrings = [
  `Santa: Alright great job everyone, it looks like another Christmas will pass successfully`,
  `Head Elf: Um…Santa actually…There’s 1 gift that wasn’t delivered`,
  `Santa: WHAT?! Where’s the new elf?`,
  `Head Elf: Here Santa sir`,
  `Santa:	Now’s your chance to get on my good list, find the missing gift and deliver it successfully to save Christmas!`,
  `Santa:	Your first obstacle will be the birds. Move your mouse up and down to dodge them.`,
  `Santa:	Press space to start your mission!`
];

// Setting the dialog to start from the first line : INTRO
let currentDialogString = 0;

// Defining all variables related to dialog box : INTRO
let dialogBox = {
  x: undefined,
  y: undefined,
  string: ``,
  visible: false,
  width: 500,
  height: 300,
  padding: 20,
  duration: 3000
};

// Array to display all 3 kinds of birds: LEVEL 1
let birds = [];
let numBluejays = 3;
let numSparrows = 3;
let numCardinals = 3;

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

// Declaring all images that will be used : LEVEL 4 INTRO
let level4StartImage;

// Declaring all images that will be used : LEVEL 4
let fallingElfImage;
let movingBrick;

let fallingElf;

let mouseImage = undefined;
let raccoonImage = undefined;

// Arrays to display mice and raccoons: LEVEL 4
let animals = [];
let numMice = 3;
let numRaccoons = 3;

// Declaring all images that will be used : LEVEL 5
let fireImage;
let stillBrick;

let fallingElfImage2;

let fire;
let snowflake;

let fallingElf2;
// Defining force of gravity for falling elf
let gravityForce = 0.0025;

let snowflakeImage;

// Declaring all images that will be used : LEVEL 6 & LEVEL 6 FAIL
let scrollImage;

/* Variables for level 6 text : LEVEL 6 */
// The missing gift the user needs to type in correctly
let missingGift = `phone`;
// The question being asked
let giftText = `What is the missing gift?`;
// A variable to track what the user has typed so far
let currentInput = ``;
// Indent from the left margin
let indent = 30;

// Declaring all images that will be used : LEVEL 7
let finalGiftImage;
let treeImage;

let finalGift;

// Declaring all ending state images : LEVEL 1, 3, 4 & 5
let level1EndImage;
let level3EndImage;
let level4EndImage;
let level5EndImage;

// Declaring final image : FINAL
let finalImage;


// Loading all images to be used into code
function preload() {

  // Loading start screen image : START
  startImage = loadImage("assets/images/start.jpg");

  // Loading intro animation : INTRO
  introAnim = loadImage("assets/images/intro.gif");

  // Loading images to be used into code : LEVEL 1
  bluejayImage = loadImage("assets/images/level1/bluejay.gif");
  cardinalImage = loadImage("assets/images/level1/cardinal.gif");
  sparrowImage = loadImage("assets/images/level1/sparrow.gif");

  sleighImage = loadImage("assets/images/level1/reindeer.gif");

  snowfall = loadImage("assets/images/snowbg.gif");

  // Loading images to be used into code : LEVEL 2
  giftImage = loadImage("assets/images/level2/level2Gift.png");
  candycaneImage = loadImage("assets/images/level2/candycane.png");

  stockingImage = loadImage("assets/images/level2/stocking.png");

  // Loading images to be used into code : LEVEL 3
  level3Image = loadImage("assets/images/level3/level3bg.jpg");

  // Loading images to be used into code : LEVEL 4 INTRO
  level4StartImage = loadImage("assets/images/level4/level4Intro.jpg");

  // Loading images to be used into code : LEVEL 4
  fallingElfImage = loadImage("assets/images/level4/fallingelf.gif");

  mouseImage = loadImage("assets/images/level4/mouse.png");
  raccoonImage = loadImage("assets/images/level4/raccoon.png");

  movingBrick = loadImage("assets/images/level4/movingbrick.gif");

  // Loading images to be used into code : LEVEL 5
  fireImage = loadImage("assets/images/level5/fire.gif");
  stillBrick = loadImage("assets/images/level5/stillbrick.gif");

  snowflakeImage = loadImage("assets/images/level5/snowflake.png");

  fallingElfImage2 = loadImage("assets/images/level5/fallingelf2.gif");

  // Loading images to be used into code : LEVEL 6
  scrollImage = loadImage("assets/images/level6/scroll.jpg");

  // Loading images to be used into code : LEVEL 7
  finalGiftImage = loadImage("assets/images/level7/finalgift.png");

  treeImage = loadImage("assets/images/level7/tree.gif");

  // Loading all ending state images : LEVEL 1, 3, 4 & 5
  level1EndImage = loadImage("assets/images/level1/level1-end.jpg");
  level3EndImage = loadImage("assets/images/level3/level3-end.jpg");
  level4EndImage = loadImage("assets/images/level4/level4-end.jpg");
  level5EndImage = loadImage("assets/images/level5/level5-end.jpg");

  // Loading final ending image : FINAL
  finalImage = loadImage("assets/images/final.jpg");
}


/**
Creating the canvas to fill the user's window size
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  /* Setup for INTRO */

  // Dialog box position : INTRO
  dialogBox.x = width / 6;
  dialogBox.y = height / 1.15;

  /* Setup for LEVEL 1 */
setupLevel1();

  /* Setup for LEVEL 2 */

  // Displaying stocking image
  stocking = new StockingL2(stockingImage);

  // Displaying candycanes using for loop
  for (let i = 0; i < numCandycanes; i++) {
    let x = random(0, width);
    let y = random(0, height / 2);
    let candycane = new CandycaneL2(x, y, candycaneImage);
    fallingGifts.push(candycane);
  }

  // Displaying gifts using for loop
  for (let i = 0; i < numGifts; i++) {
    let x = random(0, width);
    let y = random(0, height / 2);
    let gift = new GiftL2(x, y, giftImage);
    fallingGifts.push(gift);
  }

  // Displaying the direction and speed that the falling gifts will move in
  for (let i = 0; i < fallingGifts.length; i++) {
    let fallingGift = fallingGifts[i];
    fallingGift.vy = fallingGift.speed;
  }

  /* Setup for LEVEL 3 */

  // Displaying civilians using for loop
  for (let i = 0; i < numCivilians; i++) {
    let x = random(width / 2, width);
    let y = random(0, height);
    let civilian = new CivilianL3(x, y);
    civilians.push(civilian);
  }

  // Displaying user circle
  userL3 = new UserL3;

  /* Setup for LEVEL 4 */
setupLevel4();

  /* Setup for LEVEL 5 */

  // Displaying snowflake image
  snowflake = new SnowflakeL5(snowflakeImage);

  // Displaying fire image
  fire = new FireL5(fireImage);

  // Displaying falling elf image
  fallingElf2 = new FallingElfL5(fallingElfImage2);

  /* Setup for LEVEL 7 */

  // Displaying final gift image
  finalGift = new FinalGiftL7(finalGiftImage);
}

function setupLevel1() {
  // Displaying sleigh image
  sleigh = new SleighL1(sleighImage);

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
    bird.vx = -bird.speed;
  }
}

function setupLevel4() {
  // Displaying falling elf image
  fallingElf = new FallingElfL4(fallingElfImage);

  // Displaying raccoons using for loop
  for (let i = 0; i < numRaccoons; i++) {
    let x = random(0, width);
    let y = random(0, height / 6);
    let raccoon = new RaccoonL4(x, y, raccoonImage);
    animals.push(raccoon);
  }

  // Displaying mice using for loop
  for (let i = 0; i < numMice; i++) {
    let x = random(0, width);
    let y = random(0, height / 6);
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
Defining all states within game
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
  } else if (state === `level3`) {
    level3();
  } else if (state === `level3Fail`) {
    level3Fail();
  } else if (state === `level4Intro`) {
    level4Intro();
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

/* Functions for all states */

/* Starting screen state : START */
function start() {
  // Displaying starting image as background
  background(startImage);
}
/* Intro state before game begins : INTRO */
function intro() {
  // Displaying intro animation as background
  background(introAnim);
  // Displaying dialog
  displayDialog();
  // Pressing the spacebar after dialog will begin level 1
  keyPressed();
  // Display intruction text in top left corner
  push();
  cornerText();
  text(`Click to view dialogue...`, width / 24, height / 16);
  pop();
}

/* Level 1 state : LEVEL 1 */
function level1() {
  // Display snowfall animation as background
  background(snowfall);
  // Display user-controlled image
  sleigh.display();
  // If user gets hit by a bird, `level1Fail` state is triggered
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
    // User control for sleigh image
    sleigh.handleInput();
    // Check when bird and sleigh overlap
    sleigh.checkHit(bird);
  }
  // Displaying first letter from missing gift name
  missingLetters();
  text(`P`, width / 1.3, height / 16);
  fill(4, 34, 66);
}

/* State that appears when user fails to dodge a bird : LEVEL 1 FAIL */
function level1Fail() {
  // Displaying level 1 end image as background
  background(level1EndImage);
  keyPressed();
}

/* Level 2 state : LEVEL 2 */
function level2() {
  // Display snowfall animation
  background(snowfall);
  // Displaying second letter from missing gift name
  missingLetters();
  text(`H`, width / 30, height / 1.3);
  fill(26, 72, 122);
  // Displaying instructions for level 2
  push();
  cornerText();
  text(`Some gifts fell out on the way!`, width / 24, height / 16);
  text(`Use left and right arrow keys to move the stocking and catch the gifts`, width / 24, height / 9);
  pop();
  // Control stocking image using left and right arrow keys
  stocking.handleInput();
  // Display stocking image
  stocking.display();
  // Allow stocking to move
  stocking.move();
  // Initial number of gifts falling
  let numActiveFallingGifts = 0;
  // For loop to display all falling gifts
  for (let i = 0; i < fallingGifts.length; i++) {
    let fallingGift = fallingGifts[i];
    // If a falling gift is active, that means all the methods below apply
    if (fallingGift.active) {
      // Increasing the number of falling gifts as they become active
      numActiveFallingGifts++;
      // Adding movement to make gifts fall
      fallingGift.move();
      // Gifts appear back at the top once they have reached the bottom
      fallingGift.wrap();
    }
    // Display falling gifts
    fallingGift.display();
    // Check when falling gift and stocking overlap
    fallingGift.checkGift(stocking);
  }
  // If the number of gifts falling reaches 0, the next level begins
  if (numActiveFallingGifts === 0) {
    state = `level3`;
  }
}

/* Level 3 state : LEVEL 3 */
function level3() {
  // Display background image for level 3
  background(level3Image);
  push();
  // Displaying instructions
  cornerText();
  text(`You've arrived in the town, but not everyone is asleep...`, width / 24, height / 16);
  text(`Use the arrow keys to make it to the other side while staying as far away as possible from the civilians`, width / 24, height / 9);
  pop();
  // Displaying third letter from missing gift name
  missingLetters();
  text(`O`, width / 2, height / 1.2);
  fill(125, 79, 66);
  // For loop to create and display civilians
  for (let i = 0; i < civilians.length; i++) {
    let civilian = civilians[i];
    // Add movement to civilians
    civilian.move();
    // Display civilians
    civilian.display();
    // Check distance between user and civilian, if too close, fail state is triggered
    userL3.checkDist(civilian);
  }
  // Allow user to move
  userL3.move();
  // Allow arrow keys to control user movement
  userL3.handleInput();
  // Display user circle
  userL3.display();
  // Trigger next level state to begin when user reaches other side
  userL3.checkExit();
}

/* State that appears when user is too close to civilian : LEVEL 3 FAIL */
function level3Fail() {
  // Display end image for level 3
  background(level3EndImage);
  // Pressing spacebar triggers `level 3` state
  userL3.keyPressed();

  for (let i = 0; i < civilians.length; i++) {
    let civilian = civilians[i];
    civilian.keyPressed();
  }
}

/* State to give instructions for level 4 : LEVEL 4 INTRO */
function level4Intro() {
  // Display instruction image
  background(level4StartImage);
  // Press spacebar to begin level 4
  keyPressed();
}

/* Level 4 state : LEVEL 4 */
function level4() {
  // Display moving brick animation
  background(movingBrick);
  // Display falling elf image
  fallingElf.display();
  fallingElf.notDodged();
  // If user gets hit by an animal, `level4Fail` state is triggered
/*  if (!fallingElf.dodged) {
    state = `level4Fail`;
  } */
  // For loop to create all of the animals from the Animal class
  for (let i = 0; i < animals.length; i++) {
    let animal = animals[i];
    // Add movement to animals
    animal.move();
    // Animals appear at top of screen when they reach the bottom
    animal.wrap();
    // Display animal images
    animal.display();
    // If number of dodges exceeds a number, next state is triggered
    animal.numDodges();
    // Check when animal was dodged
    animal.checkExit();
    // User control
    fallingElf.handleInput();
    // Check when elf and animal overlap and trigger `level4Fail` state
    fallingElf.checkHit(animal);
  }
  // Displaying fourth letter from missing gift name
  missingLetters();
  text(`N`, width / 1.1, height / 1.1);
  fill(46, 19, 12);
}

/* State that appears when user runs into animal : LEVEL 4 FAIL */
function level4Fail() {
  // Display level 4 fail state image
  background(level4EndImage);
  // Pressing spacebar triggers `level 4` state
  keyPressed();
}

/* Level 5 state : LEVEL 5 */
function level5() {
  // Display brick background
  background(stillBrick);
  // Displaying instructions
  push();
  cornerText();
  text(`Use your magic to make a snowflake to catch your fall`, width / 24, height / 16);
  text(`A specific number key will summon it!`, width / 24, height / 9);
  pop();
  // Display fire image
  fire.display();
  // Display snowflake image
  snowflake.display();
  // Snowflake appears when `5` is pressed
  snowflake.keyPressed();
  // Snowflake is controlled using mouse
  snowflake.handleInput();
  // Display falling elf
  fallingElf2.display();
  // Adding gravity to elf
  fallingElf2.gravity(gravityForce);
  // Allowing elf to move
  fallingElf2.move();
  // Checking when elf and fire have overlapped
  fallingElf2.checkOverlap(fire);
  // Elf will bounce off of snowflake
  fallingElf2.bounce(snowflake);
  // When elf exits frame and dodges fire, level 6 begins
  fallingElf2.success();
  // Displaying fifth and final letter from missing gift name
  missingLetters();
  text(`E`, width / 27, height / 20);
  fill(46, 19, 12);
}

/* State that appears when user lands in fire : LEVEL 5 FAIL */
function level5Fail() {
  // Display level 5 fail image
  background(level5EndImage);
// Pressing spacebar will make snowflake disappear and state will change to `level5`
  snowflake.keyPressed();
  // Pressing spacebar will make elf return to initial y position and state will change to `level5`
  fallingElf2.keyPressed();
}

/* Level 6 state : LEVEL 6 */
function level6() {
  // Display scroll page as background
  background(scrollImage);
  /* Defining text position, size, position, font, colour (black) and if typed
  in word is correct, `level7` state is triggered */
  typeAnswer();
  // If user presses backspace, it will delete what they have written so far
  keyPressed();
  // Check if the converted input is the same as the missing gift
  inputIsCorrect();
  /* Add the typed key to the input string after converting it to lower case
  keyTyped(); */

}

/* State that appears when gift was incorrectly guessed : LEVEL7FAIL */
function level6Fail() {
  // Display scroll page as background
  background(scrollImage);
  // Display text that tells user that they must restart mission
  text(`You couldn't figure out what the missing gift was...`, width / 2, height / 3.5);
  text(`Time to go back to the North Pole and`, width / 2, height / 2.3);
  text(`let Santa know the mission wasn't completed...`, width / 2, height / 1.9);
  text(`Refresh to restart`, width / 2, height / 1.4);
  // Defining text size, position, font and colour (black)
  textSize(100);
  textAlign(CENTER, CENTER);
  textFont(`Gwendolyn`);
  fill(0);
}

/* Level 7 state : LEVEL 7 */
function level7() {
  // Display room with Christmas tree image
  background(treeImage);
  // Display instructions
  push();
  cornerText();
  text(`Place the gift under the Christmas tree`, width / 24, height / 16);
  pop();
  // Display final gift image
  finalGift.display();
  // When mouse is pressed on gift, it follows the mouse position
  finalGift.mousePressed();
  // When gift is placed under tree, final state is triggered
  finalGift.underTree();
}

/* State that appears when entire mission is complete : FINAL */
function final() {
  // Display final success image
  background(finalImage);
}

/* Functions to be but into states */

// Defining font size and font for letters of missing gift name
function missingLetters() {
  textSize(45);
  textFont(`Roboto Mono`);
}

/* Defining variables for text being displayed : INTRO, LEVEL 2 */
function cornerText() {
  // Text size, position, font and colour (black)
  textSize(50);
  textFont(`Gwendolyn`);
  fill(255);
}

/* Dialog box : INTRO */
function displayDialog() {
  // When the dialog box is visibles, all of the following variables apply
  if (dialogBox.visible) {
    // Displaying rectangle with red border that dialog will appear in
    push();
    rectMode(CENTER);
    stroke(0, 110, 11);
    strokeWeight(5);
    rect(dialogBox.x, dialogBox.y, dialogBox.width, dialogBox.height);
    pop();
    // Ensuring that the text is placed within dialog box
    push();
    rectMode(CENTER);
    textSize(30);
    textFont(`Architects Daughter`);
    text(dialogBox.string, dialogBox.x, dialogBox.y, dialogBox.width - dialogBox.padding, dialogBox.height - dialogBox.padding);
    pop();
  }
}

/* Event is triggered  when mouse is clicked */
function mousePressed() {
  // Displaying dialog using mouse clicks
  if (!dialogBox.visible) {
    // Dialog box being visible is true when mouse has been pressed
    dialogBox.visible = true;
    // Displaying one string after another from 0
    dialogBox.string = dialogStrings[currentDialogString];
    // Current string disappears once it has timed out
    setTimeout(hideDialog, dialogBox.duration);
  }
  // When mouse is pressed, state changes from `start` to `intro` : START
  if (state === `start`) {
    state = `intro`;
  }
}

// When dialog box is no longer visible : INTRO
function hideDialog() {
  // Dialog box being visible is not true
  dialogBox.visible = false;
  // Whenever dialog is not visible, the next string will appear next
  currentDialogString += 1;
  // When all strings have been seen, clicks only trigger final string
  if (currentDialogString >= dialogStrings.length) {
    currentDialogString = dialogStrings.length - 1;
  }
}

/* Functions for typing in gift name : LEVEL 6 */
//
function typeAnswer() {
  // Display the question
  push();
  text(giftText, indent, height / 2.5);
  pop();
  // Display the current input from the user
  push();
  // If the answer is correct, next level begins
  if (inputIsCorrect()) {
    state = `level7`;
  } else {
    // If incorrect colour remains black and text changes
    fill(0);
  }
  // Calculate question position for answer to be right underneath
  let giftTextHeight = textAscent() + textDescent();
  text(currentInput, indent, height / 2.3 + giftTextHeight);
  pop();
  // Text size, position, font and colour (black)
  textSize(150);
  textAlign(LEFT, CENTER);
  textFont(`Gwendolyn`);
  fill(0);
}

/**
Compares the current input text with the magic word and returns
true if it's correct, and false otherwise
*/
function inputIsCorrect() {
  // First convert the input to lower case so we can
  // ignore any capitalization stuff
  let lowerCaseInput = currentInput.toLowerCase();
  // Check if the converted input is the same as the missing gift
  if (lowerCaseInput === missingGift) {
    return true;
  } else {
    return false;
  }
}

/**
Add the typed key to the input string after converting it to lower case
*/
function keyTyped() {
  if (state === `level6`) {
  currentInput += key.toLowerCase();
  }
}

// Pressing a specific key triggers new state
function keyPressed() {
  if (keyCode === 32) {
    // When spacebar is pressed, state changes from `intro` to `level1` : INTRO
    if (state === `intro`) {
      state = `level1`;
    }
// When spacebar is pressed, state changes from `level1Fail` to `level1` : LEVEL 1 FAIL
    if (state === `level1Fail`) {
      state = `level1`;
      setupLevel1();
      let birds = [];
      numBluejays = 0;
      numSparrows = 0;
      numCardinals = 0;
    }
    // When spacebar is pressed, state changes from `level4Fail` to `level4` : LEVEL 4 FAIL
    if (state === `level4Fail`) {
      state = `level4`;
      setupLevel4();
      let animals = [];
      numMice = 0;
      numRaccoons = 0;
    }
    // When spacebar is pressed, state changes from `level4Intro` to `level4` : LEVEL 4 INTRO
    if (state === `level4Intro`) {
      state = `level4`;
    }
  }

  // If user presses backspace, it will delete what they have written so far : LEVEL 6
  if (keyCode === BACKSPACE) {
    currentInput = ``;
  }
}
