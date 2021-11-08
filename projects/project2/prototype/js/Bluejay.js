class Bluejay extends Bird {
  constructor(x,y,image) {
    super(x,y,image);
    this.speed = 10;
    this.width = 150;
    this.height = 150;
  }

  display() {
    super.display();

  push();
  imageMode(CENTER);
  image(this.image, this.x, this.y, this.width, this.height);
  pop();
  }
}
