class SleighL1 {
  // Defining variables for sleigh : LEVEL 1
  constructor(sleighImage) {
    this.x = width / 6;
    this.y = height / 2;
    this.width = 600;
    this.height = 265.75;
    this.dodged = true;
    this.image = sleighImage;
  }

  // If the user gets hit by a bird, dodged becomes false
  checkHit(bird) {
    /* --> Used traffic example as reference <-- */
    if (this.x > bird.x - bird.height / 2 &&
      this.x > bird.x - bird.width / 2 &&
      this.x < bird.x + bird.height / 2 &&
      this.x < bird.x + bird.width / 2 &&
      this.y > bird.y - bird.height / 2 &&
      this.y > bird.y - bird.width / 2 &&
      this.y < bird.y + bird.height / 2 &&
      this.y < bird.y + bird.width / 2) {
      this.dodged = false;
    }
  }

  // User controls character using mouse movement on the Y axis
  handleInput() {
    this.y = mouseY;
  }

  // Displaying the sleigh image
  display() {
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }
}
