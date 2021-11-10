class User {
  constructor(x, y, userImage) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.width = 600;
    this.height = 265.75;
    this.dodged = true;
    this.speed = undefined;
    this.image = userImage;
  }

  checkHit(bird) {
      if (this.x > bird.x - bird.height/2 &&
        this.x > bird.x - bird.width/2 &&
      this.x < bird.x + bird.height/2 &&
      this.x < bird.x + bird.width/2 &&
      this.y > bird.y - bird.height/2 &&
      this.y > bird.y - bird.width/2 &&
      this.y < bird.y + bird.height/2 &&
    this.y < bird.y + bird.width/2) {
        this.dodged = false;
      }
    }

  display() {

  push();
  imageMode(CENTER);
  image(this.image, this.x, this.y, this.width, this.height);
  pop();
  }

}
