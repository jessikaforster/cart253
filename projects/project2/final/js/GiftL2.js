class GiftL2 extends FallingGiftL2 {
  // Defining variables for gifts that were not defined in FallingGiftL2 class : LEVEL 2
  constructor(x, y, image) {
    super(x, y, image);
    this.speed = 8;
  }

  // Displaying the gift image
  display() {
    super.display();
    // If a gift has not been caught, it continues to be displayed
    /* --> Used video '7.1 Intermediate functions' as reference <-- */
    if (!this.caught) {
      push();
      imageMode(CENTER);
      image(this.image, this.x, this.y, this.width, this.height);
      pop();
    }
  }
}
