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

  // Pressing a specific key will trigger a function
  keyPressed() {
    // Pressing number `5` will make snowflake appear
    if (keyCode === 53) {
      this.visible = true;
    }
    // Pressing spacebar will make snowflake disappear and state will change to `level5`
    if (keyCode === 32) {
      this.visible = false;
      state = `level5`;
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
