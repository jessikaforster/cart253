class StockingL2 {
  constructor(stockingImage) {
    this.x = width/2;
    this.y = height/1.2;
    this.vx = 0;
    this.vy = 0;
    this.width = 300;
    this.height = 300;
    this.speed = 20;
    this.image = stockingImage;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  // User controls character using mouse movement on the Y axis
  handleInput() {
    if (keyIsDown(LEFT_ARROW)) {
    this.vx = -this.speed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    this.vx = this.speed;
  }
  else {
    this.vx = 0;
    }
  }

  display() {

    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }

}
