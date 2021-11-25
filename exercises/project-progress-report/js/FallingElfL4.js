class FallingElfL4 {
  // Defining variables for falling elf in level 4
  constructor(fallingElfImage) {
    this.x = width / 2;
    this.y = height / 2;
    this.width = 400;
    this.height = 400;
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
