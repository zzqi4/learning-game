import { grid } from "../utils/Formatter.js";
import { tGrid } from "../utils/Formatter.js";
import { Vector2 } from "../utils/Vector2.js";
export class Grid {
    numV;
    numH;
    width;
    coordinates;
    constructor(numH, numV, topLeft, vertical, horizontal, tolerance = 30) {
        this.numV = numV;
        this.numH = numH;
        this.width = 190;
        this.coordinates = [grid(numH, numV+1,this.width, topLeft),grid(numH+1, numV, this.width, topLeft) ];
        this.current = [Array(numH * (numV + 1)).fill(true), Array((numH + 1) * numV).fill(true)];
        this.vertical = vertical;
        this.horizontal = horizontal;
        this.tolerance = tolerance;
        document.addEventListener("click", (e) => {
            const click = new Vector2(e.offsetX - topLeft.x, e.offsetY - topLeft.y);
            this.updateCoords(click)
        });
    }
    updateCoords(click) {
        if (click.x < 0 || click.y < 0 || click.x > (this.width * this.numH+this.tolerance) || click.y > (this.width * this.numV+this.tolerance)) {
            return;
        }
        const v = click.x % this.width < this.tolerance;
        const h = click.y % this.width < this.tolerance;
        if (h && v) {
            return;
        } else if (h) {
            if (click.x % this.width < this.width){
                const i = Math.floor(click.x / this.width) + this.numH*Math.floor(click.y / this.width);
                this.current[0][i] = !this.current[0][i];
            }
        } else if (v) {
            if (click.y % this.width < this.width){
                const i =Math.floor(click.x / this.width)+(this.numH+1)*Math.floor(click.y / this.width);
                this.current[1][i] = !this.current[1][i];
            }
        }
    }
    draw(ctx) {
        for (let i = 0; i < this.current[0].length; i++) {
            if (!this.current[0][i]) {
                ctx.globalAlpha = 0.2;
            }
            ctx.drawImage(
                this.horizontal,
                this.coordinates[0][i].x + this.width / 10,
                this.coordinates[0][i].y,

            );
            ctx.globalAlpha = 1;
        }
        for (let i = 0; i < this.current[1].length; i++) {
            if (!this.current[1][i]) {
                ctx.globalAlpha = 0.2;
            }
            ctx.drawImage(
                this.vertical,
                this.coordinates[1][i].x,
                this.coordinates[1][i].y + this.width / 10,
            );
            ctx.globalAlpha = 1;
        }
    }
    // get which() {
    //     return this.current;
    // }
}
export class TGrid{
    N;
    width;
    coordinates;
    constructor(N, top, left, right, horizontal, tolerance = 20) {
        this.N = N;
        this.width = 190;
        this.coordinates = tGrid(N, this.width, top);
        this.current = [Array(N*(N+1)/2).fill(true), Array(N*(N+1)/2).fill(true), Array(N*(N+1)/2).fill(true)]; //L, R, H
        this.left = left;
        this.right = right;
        this.horizontal = horizontal;
        this.tolerance = tolerance;
        document.addEventListener("click", (e) => {
            const click = new Vector2(e.offsetX - (top.x - this.width*(this.N/2)), e.offsetY - top.y);
            this.updateCoords(click)
        });
    }
    updateCoords(click) {
        if (click.x < 0 || click.y < 0 || click.x > (this.width * this.N + this.tolerance) || click.y > (this.width * (Math.sqrt(3)/2)*this.N + this.tolerance)) {
            return;
        }

        const row = Math.floor(click.y / (this.width* Math.sqrt(3)/2));
        const col = Math.floor(click.x /(this.width/2));
        let start = (row) * (row-1) / 2;

        let x = click.x - (this.N-row)*(this.width/2);
        console.log((row)*(this.width* Math.sqrt(3)/2));
        console.log(click.y);
        const diff = click.y-(row)*(this.width* Math.sqrt(3)/2);
        if (diff>0 &&diff < this.tolerance && x%this.width < (this.width-this.tolerance/4) && x%this.width > this.tolerance/4) {
            const e = Math.floor(x / this.width);
            if (e<row && e>=0){
                this.current[2][start + e] = !this.current[2][start + e]; 
            }
            return;
        }
        //TODO:follow the line instead of col
        start = (row+1) * (row) / 2;
        const colstart = this.N-row-1;
        if (col>=colstart && col-colstart < (row+1)*2) {
            if ((col - colstart) %2 ==0){
                this.current[0][start + (col - colstart)/2] = !this.current[0][start + (col - colstart)/2];
            }else if ((col - colstart) %2 ==1){
                this.current[1][start + (col - colstart-1)/2] = !this.current[1][start + (col - colstart-1)/2];
            }
        }
        // if (this.distToLine(click, v.left, Math.sqrt(3)) < t && click.x >= v.left.x - t && click.x <= v.top.x + t) {
        //     const e = Math.floor()
        //     this.coordinates[0][start + e] = !this.coordinates[0][start + e]; 
        //     return;
        // }

        // // Edge 3: Right diagonal (slope -√3)
        // if (this.distToLine(click, v.right, -Math.sqrt(3)) < t && click.x <= v.right.x + t && click.x >= v.top.x - t) {
        //     const e = Math.floor(click.x - (n-row)*(this.width/2) % width)
        //     this.coordinates[0][start + e] = !this.coordinates[0][start + e]; 
        //     return;
        // }
    }
    draw(ctx) {
        for (let i = 0; i < this.current[0].length; i++) {
            if (!this.current[0][i]) {
                ctx.globalAlpha = 0.2;
            }
            ctx.drawImage(
                this.left,
                this.coordinates[i].x- this.left.width,
                this.coordinates[i].y + Math.sqrt(3) * this.width / 20,
            );
            ctx.globalAlpha = 1;
        }
        for (let i = 0; i < this.current[1].length; i++) {
            if (!this.current[1][i]) {
                ctx.globalAlpha = 0.2;
            }
            ctx.drawImage(
                this.right,
                this.coordinates[i].x-this.width/40,
                this.coordinates[i].y+ Math.sqrt(3) * this.width / 20

            );
            ctx.globalAlpha = 1;
        }
        for (let i = 0; i < this.current[2].length; i++) {
            if (!this.current[2][i]) {
                ctx.globalAlpha = 0.2;
            }
            ctx.drawImage(
                this.horizontal,
                this.coordinates[i].x - this.width / 2 +this.width / 40,
                this.coordinates[i].y + this.width * Math.sqrt(3)/2,

            );
            ctx.globalAlpha = 1;
        }
    }
}