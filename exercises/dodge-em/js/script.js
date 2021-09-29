/**
Dodge-Em
Jessika Forster

Exercise to practice writing if-statements, working with loops for drawing, playing with the mouse
and learning to display image(s).
*/

/**
Description of preload
*/
function preload() {
  gunImage = loadImage("assets/images/gun.png");
  alien1Image = loadImage("assets/images/alien1.png");
  alien2Image = loadImage("assets/images/alien2.png");
  alien3Image = loadImage("assets/images/alien3.png");

}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth,windowHeight);
}


/**
Description of draw()
*/
function draw() {
  background(0);

  image(alien1Image,0,0,100,100);
  image(gunImage,0,0,100,100);
  //image(alien1Image,50,50,100,100);
  image(alien2Image,0,0,100,100);
  image(alien3Image,0,0,100,100);
}
