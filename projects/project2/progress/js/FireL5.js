class FireL5 {
  constructor(fireImage) {
    this.x = width / 2;
    this.y = height / 1.2;
    this.width = 600;
    this.height = 600;
    this.image = fireImage;
  }

  // Displaying the falling elf image
  display() {
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }

}
