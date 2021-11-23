class CandycaneL2 extends FallingGiftL2 {
  constructor(x, y, image) {
    super(x, y, image);
    this.speed = 2;
  }

  // Displaying the candycane image
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
