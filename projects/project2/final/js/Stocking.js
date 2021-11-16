class Stocking {
  constructor(stockingImage) {
    this.x = width/2;
    this.y = height/1.2;
    this.vx = 0;
    this.vy = 0;
    this.width = 300;
    this.height = 300;
    this.speed = 5;
    this.image = stockingImage;
  }

  display() {

    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }

}
