class FallingGiftL2 {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.width = 100;
    this.height = 100;
    this.speed = undefined;
    this.random = 3;
    this.image = image;
  }

  // Adding movement to the gifts
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  /* When gifts reach the bottom of screen they will reappear at the starting
  point in a random position */
  wrap() {
    if (this.y > height) {
      this.y -= height;
      this.x = random(0, width);
    } else if (this.y < 0) {
      this.y += height;
      this.x = random(0, width);
    }
  }

  // Display animals (done in corresponding classes)
  display() {

  }
}
