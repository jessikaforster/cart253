class GiftL2 {
  constructor(x, y, giftImage) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.width = 100;
    this.height = 100;
    this.speed = 3;
    this.image = giftImage;
    this.caught = false;
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

  /* checkCaught(stocking) {
    if (!this.caught) {
    let d = dist(this.x, this.y, stocking.x, stocking.y);
    if (d < this.width / 2 + stocking.width / 2) {
      this.caught = true;
    }
  }

  if (!this.caught) {
    let d = dist(this.x, this.y, stocking.x, stocking.y);
    if (d < this.height / 2 + stocking.height / 2) {
      this.caught = true;
    }
  } */

  display() {
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }

}
