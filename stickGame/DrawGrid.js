import { grid } from "../utils/formatter.js";
export function drawGrid(ctx, numV, numH, vertical, horizontal, topLeft){
    const width = 190;
    grid(numV, numH, width, topLeft).forEach((coord) => {
        ctx.drawImage(
            vertical,
            coord.x,
            coord.y+width/10,
        );
        ctx.drawImage(
            horizontal,
            coord.x+width/10,
            coord.y,
        );
    });
    for(let i = 0; i < numV; i++){
        ctx.drawImage(
            vertical,
            topLeft.x+width*numH,
            topLeft.y+i*width+width/10,
        );
    }
    for(let i = 0; i < numH; i++){
        ctx.drawImage(
            horizontal,
            topLeft.x+width*i + width/10,
            topLeft.y+width*numV,
        );
    }
}