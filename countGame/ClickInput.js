import { Vector2 } from "../utils/Vector2.js";
import { Rectangle } from "../utils/Rectangle.js";
export class ClickInput {
    constructor(rect) {
        this.rect = rect;
        this.clicksMade = 0;
        document.addEventListener("click", (e) => {
            const click = new Vector2(e.offsetX, e.offsetY);
            if (this.rect.includes(click)) {
                this.clicksMade +=1;
            }
            
        });
    }
    get clicks() {
        return this.clicksMade;
    }
    set clicks(value) {
        this.clicksMade = value;
    }
    set rectangle(value) {
        this.rect = value;
    }
}