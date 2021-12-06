class BirdL1 {
  // Defining variables for birds - BluejayL1, CardinalL1 & SparrowL1 : LEVEL 1
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.width = undefined;
    this.height = undefined;
    this.speed = undefined;
    this.image = image;
    this.dodges = 0;
  }

/*  keyPressed() {
    if (keyCode === 32) {
          this.y = random(0, height);
          this.x = random(width / 4, width);
          state = `level1`;
        }
      } */

  // Adding movement to the birds
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  // Birds will shake slightly in order to make the overall movement more realistic
  wiggle() {
    this.y = this.y + random(-5, 5);
  }

  /* When birds reach the other side of screen they will reappear at the starting
  point in a random position */
  wrap() {
    if (this.x > width) {
      this.x -= width;
      this.y = random(0, height);
    } else if (this.x < 0) {
      this.x += width;
      this.y = random(0, height);
    }
  }

  // When bird passes by user, 1 is added to the dodges
  checkExit() {
    if (this.x < width / 8) {
      this.dodges += 1;
    }
  }

  // If the number of birds dodged exceeds 100, the `success` state is triggered
  numDodges() {
    if (this.dodges > 100) {
      state = `level2`;
    }
  }

  // Display birds (done in corresponding classes)
  display() {

  }
}
