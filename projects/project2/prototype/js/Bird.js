class Bird {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.exit = 0;
    this.width = undefined;
    this.height = undefined;
    this.speed = undefined;
    this.image = image;
    this.dodged = true;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  wiggle() {
    this.y = this.y + random(-5,5);
  }

  wrap() {
    if (this.x > width) {
      this.x -= width;
      this.y = random(0,height);
    }
    else if (this.x < 0) {
      this.x += width;
      this.y = random(0,height);
    }
  }

  checkDodged() {
    if (this.x > width) {
      this.exit += 1;
    }

    if (this.exit > 20) {
      this.dodged = false;
    }
  }

  checkExit() {

    }

  /* checkOverlap() {
    if (this.x > width) {
      this.dodges += 1;
    }
  } */

  display() {

  }
}
