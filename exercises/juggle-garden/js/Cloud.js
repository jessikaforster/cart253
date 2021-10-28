class Cloud {

  // Defining all variables related to clouds
  constructor(x, y, image, splashSFX, thunderSFX) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 12;
    this.size = 250;
    this.splashSFX = splashSFX;
    this.thunderSFX = thunderSFX;
    this.active = true;
    this.image = image;
  }

  // Adding gravity to clouds
  gravity(force) {
    this.ay = this.ay + force;
  }

  // Adding movement to clouds
  move() {
    this.vx = this.vx + this.ax;
    this.vy = this.vy + this.ay;

    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

    this.x = constrain(this.x, 0, width);

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if (this.y - this.size / 2 > height) {
      this.active = false;
    }
  }

  // When cloud exits frame, end1 state will appear
  check() {
    if (this.y > height)
      state = `end1`;
  }

  // When cloud exits frame, thunder sound will play
  sound() {
    if (this.y > height) {
      this.thunderSFX.play();
    }
  }

  // Cloud will bounce when it lands on paddle
  bounce(paddle) {
    if (this.x > paddle.x - paddle.width / 2 &&
      this.x < paddle.x + paddle.width / 2 &&
      this.y + this.size / 2 > paddle.y - paddle.height / 2 &&
      this.y - this.size / 2 < paddle.y + paddle.height / 2) {

      // Bounce
      let dx = this.x - paddle.x;
      this.vx = this.vx + map(dx, -paddle.width / 2, paddle.width / 2, -2, 2);

      this.vy = -this.vy;
      this.ay = 0;

      // Splash sound will play when cloud hits paddle
      this.splashSFX.play();
    }
  }

  // Display cloud image
  display() {
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.size, this.size);
    pop();
  }
}
