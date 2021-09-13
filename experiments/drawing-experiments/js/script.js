/**
Drawing Experiments
Jessika Forster

Experimenting with p5's drawing and color functions.
*/

// setup()
//
// Draws a face on the canvas
function setup() {
  createCanvas(500,500);

  // Set the background to sky blue
  background(50, 100, 250);

  // Draw a flesh-coloured head
  fill(250,200,200);
  ellipse(250,250,200,200);

  // Draw the eyes black
  fill(0,0,0);
  ellipse(200,250,30,30);
  ellipse(300,250,30,30);

  // Draw the mouth
  strokeWeight(10);
  line(200,300,300,300);
}

// Draw()
//
// Does nothing
function draw() {

}
