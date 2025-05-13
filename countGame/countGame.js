import { Sprite } from "../Sprite.js";
import { resources } from "../Resource.js";
import { GameLoop } from "../utils/GameLoop.js";
import { Vector2 } from "../utils/Vector2.js";
import { Input } from "../Input.js";
import { ClickInput } from "./ClickInput.js";
import { Rectangle } from "../utils/Rectangle.js";
import { AnimateButton } from "../AnimateButton.js";
import { AnimateSprite } from "../AnimateButton.js";
import {clickerLevels} from "./ClickerLevels.js";

const canvas = document.querySelector("#click-canvas");
const ctx = canvas.getContext("2d");

const clickerInput = new ClickInput(new Rectangle(new Vector2(20, 350), new Vector2(20 + 500*0.8, 350 + 450*0.8)));
const backInput = new ClickInput(new Rectangle(new Vector2(550, 20), new Vector2(1280, 720)));
const doneInput = new ClickInput(new Rectangle(new Vector2(60, 240), new Vector2(60+280, 240+110)));

const levels = ["bread", "cookies"];   
let curLevel = clickerLevels(ctx).bread;
var numClicked = 0;
let numCorrect = Math.floor(Math.random()*curLevel.maxnumClicked+1);
let doneButton = curLevel.background.done;
let clicker = curLevel.clicker;

const draw = () => {
    
    const bg =curLevel.background.background;
    if (bg.isLoaded) {
        ctx.drawImage(bg.image, 0, 0, 1280,720);
    }

    const frame =curLevel.background.frame;
    if (frame.isLoaded) {
        ctx.drawImage(frame.image, 0, 20, 460, 225);
    }

    doneButton.draw();

    clicker.draw();
    for (let i = 0; i < numClicked; i++) {
        ctx.drawImage(curLevel.clickerOut, curLevel.coordinates[i].x, curLevel.coordinates[i].y);
    }

    curLevel.textFunction(ctx, numCorrect);
}

const update = () => {
    if (clickerInput.clicks>0 && numClicked < curLevel.maxnumClicked) {
        
        clickerInput.clicks -= 1;
        numClicked += 1;
        clicker.click();
    }

    if (backInput.clicks>0 && numClicked > 0) {
        clicker.back();
        backInput.clicks -= 1;
        numClicked -= 1;
    }

    if (doneInput.clicks>0) {
        doneInput.clicks -= 1;
        doneButton.click();
        if (numClicked === numCorrect) {
            const level = levels[Math.floor(Math.random()*levels.length)]
            curLevel = clickerLevels(ctx)[level];
            numClicked = 0;
            numCorrect = Math.floor(Math.random()*curLevel.maxnumClicked+1);

            doneButton = curLevel.background.done;
            clicker = curLevel.clicker;
        }
    }
    doneButton.update();
    clicker.update();
    // Update the sprite's scale
    backInput.rectangle = new Rectangle(new Vector2(550, 20), new Vector2(1280, 240*Math.ceil(numClicked/3)));
}

const gameLoop = new GameLoop(update, draw);
gameLoop.start();
