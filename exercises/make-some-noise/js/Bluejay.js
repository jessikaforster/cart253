class Bluejay extends Bird {
  constructor(x,y) {
    super(x,y);
    this.size = 40;
    this.speed = 10;
  }

  display() {
    super.display();

  push();
  ellipseMode(CENTER);
  strokeWeight(4);
  stroke(163,214,255);
  fill(0,140,255)
  ellipse(this.x,this.y,this.size);
  pop();
  }
}
