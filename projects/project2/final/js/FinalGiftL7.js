class FinalGiftL7 {
  // Defining variables for final gift : LEVEL 7
  constructor(finalGiftImage) {
    this.x = width / 4.5;
    this.y = height / 1.2;
    this.size = 400;
    this.image = finalGiftImage;
  }

  // Displaying the final gift image
  display() {
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.size, this.size);
    pop();
  }

  // When mouse is pressed on gift, it follows the mouse position
  mousePressed() {
    /* --> Used my 'dodge-em' exercise as reference <-- */
    // When mouse is pressed gift follows mouse X position and when released, goes back
    if (mouseIsPressed === true) {
      this.x = mouseX;
    } else {
      this.x = width / 4.5;
    }
    // When mouse is pressed gift follows mouse Y position and when released, goes back
    if (mouseIsPressed === true) {
      this.y = mouseY;
    } else {
      this.y = height / 1.2;
    }
  }

  // When gift is placed under tree, final state is triggered
  underTree() {
    if (this.x > width / 1.5) {
      state = `final`;
    }
  }
}
