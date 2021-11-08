class Bird {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.width = undefined;
    this.height = undefined;
    this.speed = undefined;
    this.image = image;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  wrap() {
    if (this.x > width) {
      this.x -= width;
    }
    else if (this.x < 0) {
      this.x += width
    }
  }

  display() {

  }
}
