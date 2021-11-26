class SnowflakeL5 {
  // Defining variables for snowflake : LEVEL 5
  constructor(snowflakeImage) {
    this.x = width / 2;
    this.y = height / 1.4;
    this.width = 600;
    this.height = 600;
    this.image = snowflakeImage;
    this.visible = false;
  }

  // Pressing number `5` will make snowflake appear
  keyPressed() {
    if (keyCode === 53) {
      this.visible = true;
    }
  }

  // Snowflake is controlled using mouse movement on the X axis
  handleInput() {
    this.x = mouseX;
  }

  // Displaying the snowflake image
  display() {
    // If `5` has been pressed, visible becomes true
    if (this.visible) {
      push();
      imageMode(CENTER);
      image(this.image, this.x, this.y, this.width, this.height);
      pop();
    }
  }

}
