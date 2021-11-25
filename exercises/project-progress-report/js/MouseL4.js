class MouseL4 extends AnimalL4 {
  // Defining variables for mice that were not defined in AnimalL4 class : LEVEL 4
  constructor(x, y, image) {
    super(x, y, image);
    this.speed = -10;
    this.width = 70;
    this.height = 70;
  }

  // Displaying the mouse image
  display() {
    super.display();

    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }
}
