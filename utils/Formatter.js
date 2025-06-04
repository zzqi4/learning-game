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

export function grid(numH, numV, width, topLeft){
    const coordinates = [];
    for(let i = 0; i < numV; i++){
        for(let j = 0; j < numH; j++){
            coordinates.push(new Vector2(topLeft.x + j*width, topLeft.y + i*width));
        }
    }
    return coordinates;
}

export function tGrid(N, width, top){
    const coordinates = [];
    for(let i = 1; i <= N; i++){
        let b = width*(i-1)/2;
        console.log(b);
        for(let j = 0; j < i; j++){
            console.log(top.x + j*width, top.y + i*width * (Math.sqrt(3)/2));
            coordinates.push(new Vector2(top.x + j*width - b, top.y + (i-1)*width * (Math.sqrt(3)/2)));
        }
    }
    return coordinates;
}