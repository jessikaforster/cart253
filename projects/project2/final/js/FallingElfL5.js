class FallingElfL5 {
  // Defining variables for falling elf in level 5
  constructor(fallingElfImage2) {
    this.x = width / 2;
  // Elf drops from high enough that user can read instructions
    this.y = -2000;
    this.size = 400;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 12;
    this.image = fallingElfImage2;
    this.active = true;
  }

  // Adding gravity to elf
  gravity(force) {
    this.ay = this.ay + force;
  }

  // Adding movement to elf
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

  // If user overlaps with the fire, fail state is triggered
  checkOverlap(fire) {
    if (this.x > fire.x - fire.height / 2 &&
      this.x > fire.x - fire.width / 2 &&
      this.x < fire.x + fire.height / 2 &&
      this.x < fire.x + fire.width / 2 &&
      this.y > fire.y - fire.height / 2 &&
      this.y > fire.y - fire.width / 2 &&
      this.y < fire.y + fire.height / 2 &&
      this.y < fire.y + fire.width / 2) {
      state = `level5Fail`;
    }
  }

  // Elf will bounce when it lands on snowflake
  bounce(snowflake) {
    if (snowflake.visible) {
    if (this.x > snowflake.x - snowflake.width / 2 &&
      this.x < snowflake.x + snowflake.width / 2 &&
      this.y + this.size / 3 > snowflake.y - snowflake.height / 2 &&
      this.y - this.size / 3 < snowflake.y + snowflake.height / 2) {

      // Bounce
      let dx = this.x - snowflake.x;
      this.vx = this.vx + map(dx, -snowflake.width / 2, snowflake.width / 2, -2, 2);

      this.vy = -this.vy;
      this.ay = 0;
      }
    }
  }

  success() {
    if (this.y > height) {
      state=`level6`;
    }
  }

  // Displaying the falling elf image
  display() {
    push();
    image(this.image, this.x, this.y, this.size, this.size);
    pop();
  }
}
