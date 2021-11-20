class CandycaneL2 {
  constructor(x, y, candycaneImage) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.width = 100;
    this.height = 100;
    this.speed = 2;
    this.image = candycaneImage;
  }

  // Adding movement to the candycanes
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  /* When candycanes reach the bottom of screen they will reappear at the starting
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

  display() {

    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }

}
