import { Sprite } from "../Sprite.js";
import { resources } from "../Resource.js";
import { GameLoop } from "../utils/GameLoop.js";
import { Vector2 } from "../utils/Vector2.js";
import { Input } from "../Input.js";
import { Rectangle } from "../utils/Rectangle.js";
import { AnimateButton } from "../AnimateButton.js";
import { AnimateSprite } from "../AnimateButton.js";
import {drawGrid} from "./DrawGrid.js";

const canvas = document.querySelector("#stick-canvas");
const ctx = canvas.getContext("2d");


const draw = () => {
    const bg =resources.images.checkerboard;
    if (bg.isLoaded) {
        ctx.drawImage(bg.image, 0, 0, 1280,720);
    }
    drawGrid(ctx, 3, 3, resources.images.pretzelV.image, resources.images.pretzelH.image, new Vector2(600, 60));
}

const update = () => {

}

const gameLoop = new GameLoop(update, draw);
gameLoop.start();
