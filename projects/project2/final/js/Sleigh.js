class Sleigh {
  constructor(x, y, sleighImage) {
    this.x = x;
    this.y = y;
    this.width = 600;
    this.height = 265.75;
    this.dodged = true;
    this.image = sleighImage;
  }

  // If the user gets hit by a bird, dodged becomes false
  checkHit(bird) {
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

  // Displaying the user image
  display() {
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }

}
