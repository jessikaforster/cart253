class AnimalL4 {
  // Defining variables for animals - RaccoonL4 & MouseL4 : LEVEL 4
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.width = undefined;
    this.height = undefined;
    this.speed = undefined;
    this.random = 3;
    this.image = image;
    this.dodges = 0;
  }

  /* Adding movement to the animals and constraining them to remain on
  the inside of the screen */
  move() {
    /* --> Used video '7.2 Introducing arrays' as reference <-- */
    this.x += this.vx;
    this.y += this.vy;
    // Adds random movement on the x axis
    let change = random(0, 1);
    if (change < 0.05) {
      this.vx = random(-this.random, this.random);
    }
    // Constrains animals to inside the width of frame
    this.x = constrain(this.x, 0, width);
  }


  /* When animals reach the top of screen they will reappear at the starting
  point in a random position */
  wrap() {
    /* --> Used traffic example as reference <-- */
    if (this.y > height) {
      this.y -= height;
      this.x = random(0, width);
    } else if (this.y < 0) {
      this.y += height;
      this.x = random(0, width);
    }
  }

  // When animal passes by user, 1 is added to the dodges
  checkExit() {
    if (this.y < height / 8) {
      this.dodges += 1;
    }
  }

  // If the number of animals dodged exceeds 180, level 5 is triggered
  numDodges() {
    if (this.dodges > 180) {
      state = `level5`;
    }
  }

  // Display animals (done in corresponding classes)
  display() {

  }
}
