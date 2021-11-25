class SnowflakeL5 {
// Defining variables for snowflake : LEVEL 5
  constructor(snowflakeImage) {
    this.x = width/2;
    this.y = height/1.4;
    this.width = 500;
    this.height = 500;
    this.image = snowflakeImage;
  }

  // Displaying the snowflake image
  display() {
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }

}
