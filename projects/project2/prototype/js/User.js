class User {
  constructor(x, y, userImage) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.width = 640;
    this.height = 360;
    this.speed = undefined;
    this.image = userImage;
  }

  display() {

  push();
  imageMode(CENTER);
  image(this.image, this.x, this.y, this.width, this.height);
  pop();
  }

}
