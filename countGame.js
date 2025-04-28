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
const clickerInput = new ClickInput(new Rectangle(new Vector2(20, 350), new Vector2(20 + 500*0.8, 350 + 450*0.8)));
const backInput = new ClickInput(new Rectangle(new Vector2(550, 20), new Vector2(1280, 720)));
const doneInput = new ClickInput(new Rectangle(new Vector2(70, 240), new Vector2(70+280, 240+110)));
const numTotal = 7;
const slicesScale = 0.3 ;
var numClicked = 0;
const numCorrect = 3;
var format = new Formatter(new Rectangle(new Vector2(500, 20), new Vector2(1280, 720)), 3, 3);
var coordinates = format.getCoordinates();
const spriteScale = 0.8;
var scaleDone = 1;
var scalingDirectionDone = 0; // -1, 0, 1
const clicker = new Sprite({
    resource: resources.images.bread, 
    frameSize: new Vector2(500,450),
    hFrames: 3,
    vFrames:3,
    frame:0,
    scale:spriteScale
});

const draw = () => {
    
    //const bg =scenes[curLevel].background;
    const bg =resources.images.checkerboard;
    if (bg.isLoaded) {
        ctx.drawImage(bg.image, 0, 0, 1280,720);
    }

    const frame =resources.images.frame;
    if (frame.isLoaded) {
        ctx.drawImage(frame.image, 0, 20, 460, 225);
    }

    const doneButton =resources.images.done;
    if (doneButton.isLoaded) {
        ctx.drawImage(doneButton.image, 70+100*(1-scaleDone), 240, 280*scaleDone, 110*scaleDone);
    }


    const breadSlice =  resources.images.breadslice
    clicker.drawImage(ctx, 20, 350);
    for (let i = 0; i < numClicked; i++) {
        ctx.drawImage(breadSlice.image, coordinates[i].x, coordinates[i].y, breadSlice.image.width *slicesScale, breadSlice.image.height *slicesScale);
    }
    ctx.font         = '35px youngserif';
    ctx.fillStyle = 'rgb(250, 241, 227)';
    ctx.textAlign = 'center';

    ctx.fillText  ('Can I have', 210, 80);
    ctx.font         = '55px youngserif';
    ctx.fillStyle = 'rgb(240, 216, 177)';
    ctx.fillText  (numCorrect, 210, 130);
    ctx.font         = '35px youngserif';
    ctx.fillStyle = 'rgb(250, 241, 227)';
    ctx.fillText  ('slices of bread?', 210, 195);
}
let scaleFactor = 1; // Initial scale factor
let scalingDirection = 0; // 0 = no scaling, 1 = shrinking, 2 = growing

const update = () => {
    if (clickerInput.clicks>0 && numClicked < numTotal) {
        clicker.frame +=1;
        clickerInput.clicks -= 1;
        numClicked += 1;
        scalingDirection = -1; 
    }

    if (scalingDirection === -1) {
        scaleFactor -= 0.03;
        if (scaleFactor <= 0.999) { 
            scalingDirection = 1;
        }
    } else if (scalingDirection === 1) {
        scaleFactor += 0.03;
        if (scaleFactor >= 1) {
            scaleFactor = 1;
            scalingDirection = 0;
        }
    }

    if (backInput.clicks>0 && numClicked > 0) {
        clicker.frame -=1;
        backInput.clicks -= 1;
        numClicked -= 1;
    }
    console.log(numClicked);

    if (doneInput.clicks>0) {
        doneInput.clicks -= 1;
        if (numClicked === numCorrect) {
            //TODO: add a function to go to the next level
        }
        else{
            scalingDirectionDone = -1;
        }
    }
    if (scalingDirectionDone === -1) {
        scaleDone -= 0.01;
        if (scaleDone <= 0.97) { 
            scalingDirectionDone = 1;
        }
        console.log(scaleDone);
    } else if (scalingDirectionDone === 1) {
        scaleDone += 0.01;
        if (scaleDone >= 1) {
            scaleDone = 1;
            scalingDirectionDone = 0;
        }
    }
    // Update the sprite's scale
    clicker.scale = scaleFactor*spriteScale;
    backInput.rectangle = new Rectangle(new Vector2(550, 20), new Vector2(1280, 240*Math.ceil(numClicked/3)));
}

const gameLoop = new GameLoop(update, draw);
gameLoop.start();
