class UserL3 {
  constructor(x, y) {
    this.x = 0;
    this.y = height/6;
    this.vx = 0;
    this.vy = 0;
    this.size = 20;
    this.speed = 5;
  }
move() {
  this.x += this.vx;
  this.y += this.vy;

  this.y = constrain(this.y, 0, height);
}

handleInput() {
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

checkExit() {
  if (this.x > width) {
    state = `level4`;
  }
}

checkDist(civilian) {
  if (this.x > civilian.x - civilian.size * 8 &&
  this.x < civilian.x + civilian.size * 8 &&
  this.y > civilian.y - civilian.size * 8 &&
  this.y < civilian.y + civilian.size * 8) {
    state = `level3Fail`;
  }
}

keyPressed(civilian) {
  if (keyCode === 32) {
    if (state === `level3Fail`) {
      state = `level3`;
      this.x = 0;
      this.y = height/6;
      civilian.x = random(width / 2, width);
      civilian.y = random(0, height);
    }
  }
}

display() {
  push();
  fill(16, 138, 0);
  noStroke();
  ellipse(this.x, this.y, this.size);
  pop();
  }
}
