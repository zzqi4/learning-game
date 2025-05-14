import { resources } from "../Resource.js";
import { GameLoop } from "../utils/GameLoop.js";
import { Vector2 } from "../utils/Vector2.js";
import { Rectangle } from "../utils/Rectangle.js";
import {Grid} from "./Grid.js"
const canvas = document.querySelector("#stick-canvas");
const ctx = canvas.getContext("2d");
const grid = new Grid(3, 3, new Vector2(600, 60), resources.images.pretzelV.image, resources.images.pretzelH.image);

const draw = () => {
    const bg =resources.images.checkerboard;
    if (bg.isLoaded) {
        ctx.drawImage(bg.image, 0, 0, 1280,720);
    }
    grid.draw(ctx);
}

const update = () => {

}

const gameLoop = new GameLoop(update, draw);
gameLoop.start();
