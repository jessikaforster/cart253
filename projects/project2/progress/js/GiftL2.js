class GiftL2 extends FallingGiftL2 {
  constructor(x, y, image) {
    super(x, y, image);
    this.speed = 3;
  }

    // Displaying the gift image
    display() {
      super.display();

      push();
      imageMode(CENTER);
      image(this.image, this.x, this.y, this.width, this.height);
      pop();
    }


}
