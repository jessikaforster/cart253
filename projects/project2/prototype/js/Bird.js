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
    this.dodges = 0;
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

  checkExit() {
    if (this.x < width/8) {
      this.dodges += 1;
    }
  }

  triggerSuccess() {
    if (this.dodges > 50) {
      state = `success`;
    }
  }

  display() {

  }
}
