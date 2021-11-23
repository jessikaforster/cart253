class MouseL4 extends AnimalL4 {
  constructor(x, y, image) {
    super(x, y, image);
    this.speed = -8;
    this.width = 100;
    this.height = 100;
  }

  randomMovement() {
    let change = random(0, 1);
    if (change < 0.05) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
      }
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
