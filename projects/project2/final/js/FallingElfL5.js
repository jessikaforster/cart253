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
  }

  // Adding gravity to elf
  gravity(force) {
    /* --> Used '8.5. Object Oriented Programming activity' as reference <-- */
    this.ay = this.ay + force;
  }

  // Adding movement to elf
  move() {
    /* --> Used '8.5. Object Oriented Programming activity' as reference <-- */
    // Adding acceleration to the velocity
    this.vx = this.vx + this.ax;
    this.vy = this.vy + this.ay;
    // Falling elf will not exceed maxSpeed of 12
    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);
    // Keep elf within width of frame
    this.x = constrain(this.x, 0, width);
    // Allowing elf to move on x and y axis
    this.x += this.vx;
    this.y += this.vy;
  }

  // Pressing spacebar will make elf return to initial y position and state will change to `level5`
  keyPressed() {
    if (keyCode === 32) {
      this.y = -2000;
      this.x = width / 2;
      state = `level5`;
    }
  }

  // If user overlaps with the fire, fail state is triggered
  checkOverlap(fire) {
    /* --> Used traffic example as reference <-- */
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
      /* --> Used '8.5. Object Oriented Programming activity' as reference <-- */
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

  // If elf exits frame on either side of fire, `level6` begins
  success() {
    if (this.y > height) {
      state = `level6`;
    }
  }

  // Displaying the falling elf image
  display() {
    push();
    image(this.image, this.x, this.y, this.size, this.size);
    pop();
  }
}
