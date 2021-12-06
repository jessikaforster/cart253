class CardinalL1 extends BirdL1 {
  // Defining variables for cardinals that were not defined in BirdL1 class : LEVEL 1
  constructor(x, y, image) {
    super(x, y, image);
    this.speed = -17;
    this.width = 100;
    this.height = 100;
  }

  // Displaying the cardinal image
  display() {
    super.display();

    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }
}
