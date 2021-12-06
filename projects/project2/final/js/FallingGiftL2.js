class FallingGiftL2 {
  // Defining variables for falling gifts - CandycaneL2 & GiftL2 : LEVEL 2
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
    this.caught = false;
    this.active = true;
  }

  // Adding movement to the gifts
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  /* When gifts reach the bottom of screen they will reappear at the starting
  point in a random position */
  wrap() {
    /* --> Used video '7.2 Introducing arrays' as reference <-- */
    if (this.y > height) {
      this.y -= height;
      this.x = random(0, width);
    } else if (this.y < 0) {
      this.y += height;
      this.x = random(0, width);
    }
  }

  checkGift(stocking) {
    /* --> Used video '7.1 Intermediate functions' as reference <-- */
    if (!this.caught) {
      let d = dist(this.x, this.y, stocking.x, stocking.y);
      if (d < this.width / 2 + stocking.width / 2) {
        this.caught = true;
        this.active = false;
      }
    }

    if (!this.caught) {
      let d = dist(this.x, this.y, stocking.x, stocking.y);
      if (d < this.height / 2 + stocking.height / 2) {
        this.caught = true;
        this.active = false;
      }
    }
  }

  // Display falling gifts (done in corresponding classes)
  display() {

  }
}
