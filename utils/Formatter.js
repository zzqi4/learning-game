import {Rectangle} from "./Rectangle.js"
import {Vector2} from "./Vector2.js"
export class Formatter{
    constructor(rect, numV, numH){
        this.rect = rect;
        this.numV = numV;
        this.numH = numH;
    }
    getCoordinates(){
        const width = this.rect.width / this.numH;
        const height = this.rect.height / this.numV;
        const coordinates = [];
        for(let i = 0; i < this.numV; i++){
            for(let j = 0; j < this.numH; j++){
                const x = this.rect.topLeft.x + j * width;
                const y = this.rect.topLeft.y + i * height;
                coordinates.push(new Vector2(x, y));
            }
        }
        return coordinates;
    }

}