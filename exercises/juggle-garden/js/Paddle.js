class Paddle {

  // Defining all variables related to paddle
  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = height - this.height / 2;
  }

  // Paddle is controlled by mouse movement
  move() {
    this.x = mouseX;
  }

  // Display paddle
  display() {
    push();
    fill(0, 153, 255)
    noStroke();
    rectMode(CENTER);
    ellipse(this.x, this.y, this.width, this.height);
    pop();
  }

}
