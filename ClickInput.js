import { Vector2 } from "./utils/Vector2.js";
import { Rectangle } from "./utils/Rectangle.js";
export class ClickInput{
    contructor(canvas, rect){
        canvas.log("hi")
        this.rect = rect;
        canvas.addEventListener("click", (e) => {
            click = new Vector2(e.clientX, e.clientY);
            if (this.rect.includes(click)) {
                console.log("Click inside rectangle at: ", click.x, click.y);
            } else {
                console.log("Click outside rectangle at: ", click.x, click.y);
            }
        });
    }
}