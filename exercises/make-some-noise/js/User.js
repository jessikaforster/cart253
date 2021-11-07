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

  display() {
      push();
      fill(255);
      noStroke();
      ellipse(this.x,this.y,this.size);
      pop();
    }
  }
