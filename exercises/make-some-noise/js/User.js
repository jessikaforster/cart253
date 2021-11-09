class User {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.size = 100;
    this.vx = 0;
    this.vy = 0;
    this.ay = 0.3;
    this.speed = 10;
    this.dodged = true;
    this.moveThreshold = 0.2;
  }

  checkHit(bird) {
    if (this.x > bird.x - bird.size/2 &&
    this.x < bird.x + bird.size/2 &&
    this.y > bird.y - bird.size/2 &&
    this.y < bird.y + bird.size/2) {
      this.dodged = false;
    }
  }

micInput() {
  let vol = mic.getLevel();
  this.vy = map(vol, 0, 0.01, height, 0);
} 

  handleInput() {
  let vol = mic.getLevel();
    if (vol > 0.1) {
  this.vy = -4;
}
else {
  this.vy = 1;
}
  }

  display() {
      push();
      fill(255);
      noStroke();
      ellipse(this.x,this.y,this.size,this.size);
      pop();
    }
  }
