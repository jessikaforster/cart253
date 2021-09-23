/**
I like to move it!
Jessika Forster

The first exercise of the semester. The program should at minimum includes 3 shapes, movement,
size changes, color changes, map(), constrain(), respond to the mouse position using mousX and mouseY
*/

let bg = {
  r: 0,
  g: 0,
  b: 0,
};
let rect1 = {
  x: 250,
  y: 250,
  size: 100,
  fill: 255,
  stroke: 255,
  alpha: 255,
  speed: 1,
};
  let rect2 = {
    x: 250,
    y: 250,
    size: 100,
    fill: 255,
    stroke: 255,
    alpha: 255,
    speed: 1,
  }

let rect3 = {
  x: 250,
  y: 250,
  size: 100,
  fill: 255,
  stroke: 255,
  alpha: 255,
  speed: 1,
}

/**
Description of setup
*/
function setup() {
createCanvas(500,500);
noStroke();
}


/**
Description of draw()
*/

  // First growing square
  function draw() {

// Background
    background(bg.r,bg.g,bg.b);
    bg.r = map(mouseX, 0, width, 255, 0);
    bg.b = map(mouseY,0,height, 0, 255);

// Rect1 movement
noFill();
stroke(rect1.stroke,rect1.alpha);
strokeWeight(5);
rectMode(CENTER);
rect1.x = rect1.x + 1;
rect(rect1.x,rect1.y,rect1.size);
rect1.size = rect1.size + 0.75;

// Rect2 movement
noFill();
stroke(rect2.stroke,rect2.alpha);
strokeWeight(5);
rectMode(CENTER);
rect2.x = rect2.x - 1;
rect(rect2.x,rect2.y,rect2.size);
rect2.size = rect2.size + 0.75;
rect2.size = constrain(rect2.size,0,300);


// Rect 3 movement
fill(rect3.fill);
rectMode(CENTER);
rect3.size = random(-10,200);
rect(rect3.x,rect3.y,rect3.size);
}
