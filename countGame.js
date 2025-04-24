import { Sprite } from "./Sprite.js";
import { resources } from "./Sprite.js";
import { GameLoop } from "./GameLoop.js";
import { Vector2 } from "./Vector2.js";
import { Input } from "./Input.js";

const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");
const input = new Input(canvas);
const clicker = new Sprite({
    resource: resources.images.bread,
    frameSize: new Vector2(500,450),
    hFrames: 3,
    vFrames:3,
    frame:0,
});

const draw = () => {
    
    // const bg =scenes[curLevel].background;
    // if (bg.isLoaded) {
    //     ctx.drawImage(bg.image, 0, 0, 1280,720);
    // }
    // ctx.imageSmoothingEnabled = false;
    
    clicker.drawImage(ctx, 0, 0);
    
}

const update = () => {

}

const gameLoop = new GameLoop(update, draw);
gameLoop.start();