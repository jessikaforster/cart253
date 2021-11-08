class User {
  
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.width = 192;
    this.height = 108;
    this.vx = 0;
    this.vy = 0;
    this.ay = 0.3;
    this.speed = 10;
    this.dodged = true;
    this.image = image;
  }

  display() {
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }
}
