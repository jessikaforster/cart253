/**
Love Actually
Jessika Forster

This is the 3rd exercise for CART 253. The program must allow for the user to control one of the circles, the non-user circle should move differently,
at least one extra function must be added and at least one extra ending is required.
*/

/**
Load photos to be used in game
*/
let userImage;
let frogImage;
let happycellImage;
let sadcellImage;
let ycposterImage;

function preload() {
  userImage = loadImage("assets/images/froghead.png");
  frogImage = loadImage("assets/images/frog.png");
  happycellImage = loadImage("assets/images/happycell.png");
  sadcellImage = loadImage("assets/images/sadcell.png");
  ycposterImage = loadImage("assets/images/ycposter.png");
}

let user = {
  x: 0,
  y: 0,
  width: 150,
  height: 150,
};

let frog = {
  x: 50,
  y: 100,
  width: 400,
  height: 400,
};

let happycell = {
  x: 50,
  y: 100,
  width: 400,
  height: 400,
};

let sadcell = {
  x: 50,
  y: 100,
  width: 400,
  height: 400,
};

let ycposter = {
  x: 160,
  y: 120,
  width: 179,
  height: 256,
};

let circle1 = {
  x: 0,
  y: 0,
  r: 133,
  g: 133,
  b: 133,
  size: 100,
  vx: 5,
  vy: 0,
  speed: 3,
};


/**
Description of setup
*/
function setup() {
  createCanvas(500,500);
}


/**
Description of draw()
*/
function draw() {
  background(0);

image(userImage,user.x,user.y,user.width,user.height);
image(frogImage,frog.x,frog.y,frog.width,frog.height);
image(sadcellImage,sadcell.x,sadcell.y,sadcell.width,sadcell.height);
image(happycellImage,happycell.x,happycell.y,happycell.width,happycell.height);
image(ycposterImage,ycposter.x,ycposter.y,ycposter.width,ycposter.height);


}
