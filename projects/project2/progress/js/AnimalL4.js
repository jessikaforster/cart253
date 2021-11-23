class AnimalL4 {
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

  /* Adding movement to the animals and constraining them to remain on
  the inside of the screen */
  move() {
      this.x += this.vx;
      this.y += this.vy;

      this.x = constrain(this.x, 0, width);
      this.y = constrain(this.y, 0, height);
  }


  /* When animals reach the top of screen they will reappear at the starting
  point in a random position */
  wrap() {
    if (this.y < 0) {
      this.x -= width;
      this.y = random(0, height);
    } else if (this.x < 0) {
      this.x += width;
      this.y = random(0, height);
    }
  }

  // When animal passes by user, 1 is added to the dodges
  checkExit() {
    if (this.y < 0) {
      this.dodges += 1;
    }
  }

  // If the number of animals dodged exceeds 100, level 5 is triggered
  numDodges() {
    if (this.dodges > 100) {
      state = `level5`;
    }
  }

  // Display animals (done in corresponding classes)
  display() {

  }
}
