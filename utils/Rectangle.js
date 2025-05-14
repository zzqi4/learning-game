import { Vector2 } from './Vector2.js';
export class Rectangle {
    topLeft;
    bottomRight;
    constructor(topLeft, bottomRight) {
        this.topLeft = topLeft;
        this.bottomRight = bottomRight;
    }
    get width() {
        return this.bottomRight.x - this.topLeft.x;
    }  
    get height() {
        return this.bottomRight.y - this.topLeft.y;
    }
    get center() {
        return new Vector2((this.topLeft.x+this.bottomRight.x)/2, (this.topLeft.y+this.bottomRight.y)/2)
    }
    includes(point) {
        return point.x >= this.topLeft.x && point.x <= this.bottomRight.x &&
               point.y >= this.topLeft.y && point.y <= this.bottomRight.y;
    }
} 