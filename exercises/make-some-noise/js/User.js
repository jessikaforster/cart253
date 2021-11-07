class User {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.size = 100;
    this.vx = 0;
    this.vy = 0;
    this.speed = 10;
    this.dodged = true;
  }

  display() {
      push();
      fill(255);
      noStroke();
      ellipse(this.x,this.y,this.size);
      pop();
    }
  }
