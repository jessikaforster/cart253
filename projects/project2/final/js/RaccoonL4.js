class RaccoonL4 extends AnimalL4 {
  // Defining variables for raccoons that were not defined in AnimalL4 class : LEVEL 4
  constructor(x, y, image) {
    super(x, y, image);
    this.speed = -8;
    this.width = 200;
    this.height = 200;
  }

  // Displaying the raccoon image
  display() {
    super.display();

    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }
}
