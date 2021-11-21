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

display() {
  push();
  fill(16, 138, 0);
  noStroke();
  ellipse(this.x, this.y, this.size);
  pop();
  }
}
