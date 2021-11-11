class Sparrow extends Bird {
  constructor(x, y, image) {
    super(x, y, image);
    this.speed = -10;
    this.width = 100;
    this.height = 100;
  }

  // Displaying the sparrow image
  display() {
    super.display();

    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }
}
