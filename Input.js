import { Vector2 } from "./Vector2";

export const LEFT = "LEFT"
export const RIGHT = "RIGHT"
export const UP = "UP"
export const DOWN = "DOWN"

export class Input {
  constructor(canvas) {

    this.heldDirections = [];
    this.spacePressed = false;
    canvas.addEventListener("click", (e) => {
        const click = new Vector2(e.clientX, e.clientY);
    });
    document.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
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
    return click;
  }
  get space() {
    return this.spacePressed;
  }
}