/**
Age of Aquariums
Jessika Forster

Exercise to practice adding a user-controlled shape (or image), making the user interact with the fish
(or whatever they are in your simulation), changing the fish (or whatever) creation and adding at least 2
endings.
*/
let candies1 = []
let candy1Size = 10;
let bg;

function preload() {
  bg = loadImage("assets/images/street.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

// User that will be moved using the mouse
let user = {
  x: 0,
  y: 0,
  size: 100,
};

function createCandy1(x,y)
let candy1 = {
    x: x,
    y: y,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 2
  };
  return candy1;
}

function createCandy2(x,y)
let candy2 = {
    x: x,
    y: y,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 2
  };
  return candy2;
}

function createCandy3(x,y)
let candy3 = {
    x: x,
    y: y,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 2
  };
  return candy3;
}

function createEnemy(x,y)
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
}
