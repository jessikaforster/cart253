class Sparrow extends Bird {
  constructor(x,y) {
    super(x,y);
    this.speed = 10;
    this.width = 300;
    this.height = 300;
  }

  display() {
    super.display();

  push();
  imageMode(CENTER);
  image(this.image, this.x, this.y, this.size, this.size);
  pop();
  }
}
