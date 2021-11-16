class Cardinal extends Bird {
  constructor(x, y, image) {
    super(x, y, image);
    this.speed = -17;
    this.width = 100;
    this.height = 100;
  }

  // Displaying the bluejay image
  display() {
    super.display();

    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }
}
