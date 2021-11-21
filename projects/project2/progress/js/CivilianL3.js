class CivilianL3 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.size = 20;
    this.speed = 5;
  }

  move() {
  let change = random(0, 1);
  if (change < 0.05) {
    this.vx = random(-this.speed, this.speed);
    this.vy = random(-this.speed, this.speed);
    }

    this.x += this.vx;
    this.y += this.vy;

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
}

display() {
  push();
  fill(255,0,0);
  noStroke();
  ellipse(this.x, this.y, this.size);
  pop();
  }
}
