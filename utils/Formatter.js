import {Rectangle} from "./Rectangle.js"
import {Vector2} from "./Vector2.js"

export function formatter(numV, numH, rect){
    const width = rect.width / numH;
    const height = rect.height / numV;
    const coordinates = [];
    for(let i = 0; i < numV; i++){
        for(let j = 0; j < numH; j++){
            const x = rect.topLeft.x + j * width;
            const y = rect.topLeft.y + i * height;
            coordinates.push(new Vector2(x, y));
        }
    }
    return coordinates;
}

export function grid(numV, numH, width, topLeft){
    const coordinates = [];
    for(let i = 0; i < numV; i++){
        for(let j = 0; j < numH; j++){
            coordinates.push(new Vector2(topLeft.x + j*width, topLeft.y + i*width));
        }
    }
    return coordinates;
}