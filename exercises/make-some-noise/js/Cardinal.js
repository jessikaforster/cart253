class Cardinal extends Bird {
  constructor(x,y) {
    super(x,y);
    this.size = 30;
    this.speed = 10;
  }

  display() {
    super.display();

  push();
  ellipseMode(CENTER);
  strokeWeight(4);
  stroke(94,0,0);
  fill(255,0,0)
  ellipse(this.x,this.y,this.size);
  pop();
  }
}
