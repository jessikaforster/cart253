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
  };

  let rect3 = {
    x: 250,
    y: 250,
    size: 500,
    fill: 255,
    stroke: 255,
    alpha: 255,
    speed: 1,
  };

  let rect4 = {
    x: 250,
    y: 250,
    size: 500,
    fill: 255,
    stroke: 255,
    alpha: 255,
    speed: 1,
  };

  let rect5 = {
    x: 250,
    y: 0,
    size: 100,
    fill: 255,
    stroke: 255,
    alpha: 255,
    speed: 1,
  };

let rect6 = {
  x: 250,
  y: 250,
  size: 100,
  fill: 255,
  stroke: 255,
  alpha: 255,
  speed: 1,
};

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
// rect2.size = constrain(rect2.size,0,300);

// Rect3 movement
noFill();
stroke(rect3.stroke,rect3.alpha);
strokeWeight(5);
rectMode(CENTER);
rect3.x = rect3.x + 1;
rect(rect3.x,rect3.y,rect3.size);
rect3.size = rect3.size - 0.50;

// Rect4 movement
noFill();
stroke(rect4.stroke,rect4.alpha);
strokeWeight(5);
rectMode(CENTER);
rect4.x = rect4.x - 1;
rect(rect4.x,rect4.y,rect4.size);
rect4.size = rect4.size - 0.50;

// Rect5 movement
noFill();
stroke(rect5.stroke,rect5.alpha);
strokeWeight(5);
// rectMode(CENTER);
rect5.size = constrain(rect5.size,100,300);
rect(rect5.x,rect5.y,rect5.size);
rect5.size = rect5.size + 1;
rect5.y = rect5.y + 1;


// Rect 6 movement
fill(rect6.fill - 10);
rectMode(CENTER);
rect6.size = random(0,300);
rect(rect6.x,rect6.y,rect6.size);
}
