class GiftL2 extends FallingGiftL2 {
  constructor(x, y, image) {
    super(x, y, image);
    this.speed = 8;
  }

    // Displaying the gift image
    display() {
      super.display();
if (!this.caught) {
      push();
      imageMode(CENTER);
      image(this.image, this.x, this.y, this.width, this.height);
      pop();
    }
    }


}
