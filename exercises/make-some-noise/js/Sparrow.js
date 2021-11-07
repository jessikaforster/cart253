class Sparrow extends Bird {
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
  stroke(99,86,78);
  fill(92,35,0)
  ellipse(this.x,this.y,this.size);
  pop();
  }
}
