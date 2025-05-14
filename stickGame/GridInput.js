import { Vector2 } from "../utils/Vector2.js";
import { Rectangle } from "../utils/Rectangle.js";
import {grid} from "../utils/formatter.js";
export class GridInput {
    constructor(numV, numH, topLeft, tolerance = 5) {
        this.rect = rect;
        this.numV = numV;
        this.numH = numH;
        this.coordinates = [];
        document.addEventListener("click", (e) => {
            const click = new Vector2(e.offsetX, e.offsetY);
            
            
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