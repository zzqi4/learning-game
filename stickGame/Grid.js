import { grid } from "../utils/formatter.js";
import { Vector2 } from "../utils/Vector2.js";
export class Grid {
    numV;
    numH;
    width;
    coordinates;
    constructor(numV, numH, topLeft, vertical, horizontal, tolerance = 30) {
        this.numV = numV;
        this.numH = numH;
        this.width = 190;
        this.coordinates = [grid(numH+1, numV,this.width, topLeft),grid(numH, numV+1, this.width, topLeft) ];
        this.current = [Array((numH + 1) * numV).fill(true), Array(numH * (numV + 1)).fill(true)];
        this.vertical = vertical;
        this.horizontal = horizontal;
        this.tolerance = tolerance;
        document.addEventListener("click", (e) => {
            const click = new Vector2(e.offsetX - topLeft.x, e.offsetY - topLeft.y);
            this.updateCoords(click)
        });
    }
    updateCoords(click) {
        console.log(click);
        const v = click.x % this.width < this.tolerance;
        const h = click.y % this.width < this.tolerance;
        if (h && v) {
            return;
        } else if (h) {
            if (click.x % this.width < this.width){
                console.log("horizontal");
                const i = Math.floor(click.x / this.width) + this.numH*Math.floor(click.y / this.width);
                this.current[0][i] = !this.current[0][i];
            }
        } else if (v) {
            if (click.y % this.width < this.width){
                console.log("vertical");
                const i =Math.floor(click.x / this.width)+(this.numH+1)*Math.floor(click.y / this.width);
                this.current[1][i] = !this.current[1][i];
            }
        }
        console.log(this.current);
    }
    draw(ctx) {
        for (let i = 0; i < this.current[0].length; i++) {
            if (this.current[0][i]) {
                ctx.drawImage(
                    this.horizontal,
                    this.coordinates[0][i].x + this.width / 10,
                    this.coordinates[0][i].y,
                    this.horizontal.width,
                    this.horizontal.height,
                );
            }
        }
        for (let i = 0; i < this.current[1].length; i++) {
            if (this.current[1][i]) {
                ctx.drawImage(
                    this.vertical,
                    this.coordinates[1][i].x,
                    this.coordinates[1][i].y + this.width / 10,
                    this.vertical.width,
                    this.vertical.height,
                );
            }
        }
    }
    get coordinates() {
        return this.coordinates;
    }
}