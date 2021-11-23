class FallingElfL4 {
  constructor(x, y, fallingElfImage) {
    this.x = x;
    this.y = y;
    this.width = 300;
    this.height = 300;
    this.dodged = true;
    this.image = fallingElfImage;
  }

  // If the user gets hit by an animal, dodged becomes false
  checkHit(animal) {
    if (this.x > animal.x - animal.height / 2 &&
      this.x > animal.x - animal.width / 2 &&
      this.x < animal.x + animal.height / 2 &&
      this.x < animal.x + animal.width / 2 &&
      this.y > animal.y - animal.height / 2 &&
      this.y > animal.y - animal.width / 2 &&
      this.y < animal.y + animal.height / 2 &&
      this.y < animal.y + animal.width / 2) {
      this.dodged = false;
    }
  }

  // User controls character using mouse movement on the X axis
  handleInput() {
    this.x = mouseX;
  }

  // Displaying the falling elf image
  display() {
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }

}
