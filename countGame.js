import { Sprite } from "./Sprite.js";
import { resources } from "./Resource.js";
import { GameLoop } from "./GameLoop.js";
import { Vector2 } from "./utils/Vector2.js";
import { Input } from "./Input.js";
import { ClickInput } from "./ClickInput.js";
import {Formatter} from "./utils/formatter.js";
import { Rectangle } from "./utils/Rectangle.js";

const canvas = document.querySelector("#click-canvas");
const ctx = canvas.getContext("2d");
const input = new Input(canvas);
const clickerInput = new ClickInput(new Rectangle(new Vector2(50, 160), new Vector2(50 + 500, 160 + 450)));
const numTotal = 7;
const slicesScale = 0.3 ;
var numClicked = 0;
var format = new Formatter(new Rectangle(new Vector2(500, 20), new Vector2(1280, 720)), 3, 3);
var coordinates = format.getCoordinates();
const clicker = new Sprite({
    resource: resources.images.bread, 
    frameSize: new Vector2(500,450),
    hFrames: 3,
    vFrames:3,
    frame:0,
    scale:0.7
});

const draw = () => {
    
    //const bg =scenes[curLevel].background;
    const bg =resources.images.checkerboard;
    if (bg.isLoaded) {
        ctx.drawImage(bg.image, 0, 0, 1280,720);
    }
    ctx.imageSmoothingEnabled = false;
    const breadSlice =  resources.images.breadslice
    clicker.drawImage(ctx, 50, 160);
    for (let i = 0; i < numClicked; i++) {
        ctx.drawImage(breadSlice.image, coordinates[i].x, coordinates[i].y, breadSlice.image.width *slicesScale, breadSlice.image.height *slicesScale);
    }
    
}

const update = () => {
    if (clickerInput.clicks>0 && numClicked < numTotal) {
        clicker.frame = clicker.frame + 1;
        console.log(clicker.frame);
        input.spaces = input.spaces - 1;
        console.log(input.spaces);
        numClicked += 1;
    }

}

const gameLoop = new GameLoop(update, draw);
gameLoop.start();
