/**
Age of Aquariums
Jessika Forster

Exercise to practice adding a user-controlled shape (or image), making the user interact with the fish
(or whatever they are in your simulation), changing the fish (or whatever) creation and adding at least 2
endings.
*/
let candies1 = []
let candy1Size = 10;
let candies2 = []
let candy2Size = 10;
let candies3 = []
let candy3Size = 10;
let enemies = []
let enemySize = 10;
let bg;

function preload() {
  bg = loadImage("assets/images/street.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

let state = `simulation`; // Can be: title, simulation, end1, end2

// User that will be moved using the mouse
let user = {
  x: 0,
  y: 0,
  size: 100,
};

function createCandy1(x,y) {
let candy1 = {
    x: x,
    y: y,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 2,
    eaten: false,
  };
  return candy1;
}

function createCandy2(x,y) {
let candy2 = {
    x: x,
    y: y,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 2,
    eaten: false,
  };
  return candy2;
}

function createCandy3(x,y) {
let candy3 = {
    x: x,
    y: y,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 2,
    eaten: false,
  };
  return candy3;
}

function createEnemy(x,y) {
let enemy = {
    x: x,
    y: y,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 2
  };
  return enemy;
}

function draw() {
  background(bg);

// Identifying all states
if (state === `title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }
  else if (state === `end1`) {
    end1();
  }
  else if (state === `end2`) {
    end2();
    }
  }

  function title() {

  }

  function simulation() {
    moveUser();
    checkCandy1();
    displayUser();
    makeCandy1();
  }

  function end1() {

  }

  function end2() {

  }

  // Sets the user position to the mouse position
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

function checkCandy1(candy1) {
  if (!candy1.eaten) {
    let d = dist(user.x, user.y, candy1.x, candy1.y);
    if (d < user.size / 2 + candy1.size / 2) {
      candy1.eaten = true;
    }
  }

  // Display all circles
  function displayUser() {
    push();
    fill(255,102,0);
    ellipse(user.x, user.y, user.size);
    pop();
  }
  // Show apple and add movement
  function makeCandy1() {
      for (let i = 0; i < candies1.length; i++) {
        moveCandy1(candies1[i]);
        displayCandy1(candies1[i]);
    }
}

function moveCandy1(candy1) {
  // Choose whether to change direction
  let change = random(0, 1);
  if (change < 0.05) {
    candy1.vx = random(-candy1.speed, candy1.speed);
    candy1.vy = random(-candy1.speed, candy1.speed);
  }
      // Move the candy1
  candy1.x = candy1.x + candy1.vx;
  candy1.y = candy1.y + candy1.vy;

  // Constrain the fish to the canvas
  candy1.x = constrain(candy1.x, 0, width);
  candy1.y = constrain(candy1.y, 0, height);
    }
  }


  function displayCandy1(candy1) {
    if (!candy1.eaten){
    push();
    fill(0,187,255);
    ellipse(candy1.x,candy1.y,candy1.size);
    pop();
    }
  }
