class StockingL2 {
  // Defining variables for stocking : LEVEL 2
  constructor(stockingImage) {
    this.x = width / 2;
    this.y = height / 1.2;
    this.vx = 0;
    this.width = 300;
    this.height = 300;
    this.speed = 20;
    this.image = stockingImage;
    this.caught = false;
  }

  // Allowing stocking to move on x axis
  move() {
    this.x += this.vx;
  }

  // User controls stocking using left and right arrow keys
  handleInput() {
    /* --> Used my 'love-actually' exercise as reference <-- */
    if (keyIsDown(LEFT_ARROW)) {
      this.vx = -this.speed;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.vx = this.speed;
    } else {
      this.vx = 0;
    }
  }

  // Display stocking image
  display() {

    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }
}
