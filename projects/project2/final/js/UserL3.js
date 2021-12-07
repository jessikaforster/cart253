class UserL3 {
  // Defining variables for user : LEVEL 3
  constructor(x, y) {
    this.x = 0;
    this.y = height / 6;
    this.vx = 0;
    this.vy = 0;
    this.size = 20;
    this.speed = 5;
  }

  // Allowing user to move on x and y axis
  move() {
    this.x += this.vx;
    this.y += this.vy;

    // Constraining user to be unable to exit from the top or bottom of screen
    this.y = constrain(this.y, 0, height);
  }

  // User is controlled using left, right, up and down arrow keys
  handleInput() {
    /* --> Used my 'love-actually' exercise as reference <-- */
    if (keyIsDown(LEFT_ARROW)) {
      this.vx = -this.speed;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.vx = this.speed;
    } else {
      this.vx = 0;
    }
    if (keyIsDown(UP_ARROW)) {
      this.vy = -this.speed;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.vy = this.speed;
    } else {
      this.vy = 0;
    }
  }

  // Pressing spacebar will return user to initial position and restart `level3`
  keyPressed() {
    if (keyCode === 32) {
      this.y = height / 6;
      this.x = 0;
      state = `level3`;
    }
  }

  // When user reaches other side of screen, `level4Intro` state is triggered
  checkExit() {
    if (this.x > width) {
      state = `level4Intro`;
    }
  }

  // When user is too close to civilian, failure state is triggered
  checkDist(civilian) {
    /* --> Used traffic example as reference <-- */
    if (this.x > civilian.x - civilian.size * 8 &&
      this.x < civilian.x + civilian.size * 8 &&
      this.y > civilian.y - civilian.size * 8 &&
      this.y < civilian.y + civilian.size * 8) {
      state = `level3Fail`;
    }
  }

  // Display user as green circle
  display() {
    push();
    fill(16, 138, 0);
    noStroke();
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
