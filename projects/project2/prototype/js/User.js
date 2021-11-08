class User {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.width = 192;
    this.height = 108;
    this.vx = 0;
    this.vy = 0;
    this.ay = 0.3;
    this.speed = 10;
    this.dodged = true;
  }

  display() {
  push();
  imageMode(CENTER);
  image(this.image, this.x, this.y, this.size, this.size);
  pop();
  }
}
