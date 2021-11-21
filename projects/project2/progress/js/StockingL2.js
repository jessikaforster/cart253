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
    this.caught = false;
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

/*  checkCaughtGift(gift) {
    if (!gift.caught) {
    let d = dist(this.x, this.y, gift.x, gift.y);
    if (d < this.width / 2 + gift.width / 2) {
      gift.caught = true;
    }
  }

  if (!gift.caught) {
    let d = dist(this.x, this.y, gift.x, gift.y);
    if (d < this.height / 2 + gift.height / 2) {
      gift.caught = true;
    }
  }
}

  checkCaughtCane(candycane) {

  } */

  display() {

    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }

}
