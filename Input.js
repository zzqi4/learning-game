export class Input {
  constructor(canvas) {
    this.spacesHeld = 0;
    this.spacePressed = false;

    document.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        if (!this.spacePressed) {
          this.spacesHeld +=1;
        }
        this.spacePressed = true;
      }
    })

    document.addEventListener("keyup", (e) => {
      if (e.code === "Space") {
        this.spacePressed = false;
      }
    })
  }

  get coord() {
    return this.click;
  }
  get spaces() {
    return this.spacesHeld;
  }
  set spaces(value) {
    this.spacesHeld = value;
  }
}