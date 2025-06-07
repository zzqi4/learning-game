import { resources } from "../Resource.js";
import { GameLoop } from "../utils/GameLoop.js";
import { Vector2 } from "../utils/Vector2.js";
import { Rectangle } from "../utils/Rectangle.js";
import {Grid} from "./Grid.js"
import { ClickInput } from "../ClickInput.js";
import {stickLevels} from "./StickLevels.js";

const canvas = document.querySelector("#stick-canvas");
const ctx = canvas.getContext("2d");

const doneInput = new ClickInput(new Rectangle(new Vector2(60, 240), new Vector2(60+280, 240+110)));

const levels = ["a", "b", "c"];
let curLevel = stickLevels(ctx)[levels[0]];
let curNum = 0;
let doneButton = curLevel.background.done;
let grid = curLevel.grid;
let doneL = [];
for (let i = 0; i < levels.length; i++) {
    doneL.push(Array(stickLevels(ctx)[levels[i]].puzzles.length).fill(false));
}
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

    grid.draw(ctx);
    curLevel.textFunction(ctx, curLevel.puzzles[curNum][0],curLevel.puzzles[curNum][1], curLevel.puzzles[curNum][2]);
}

const update = () => {
    if (doneInput.clicks>0) {
        doneInput.clicks -= 1;
        doneButton.click();
        var done = true;
        console.log(grid.current);
        console.log(curLevel.key[curNum]);
        for (let j = 0; j < curLevel.key[curNum].length; j++) {
            done = true;
            for (let i = 0; i < grid.current[0].length; i++) {
                if (grid.current[0][i] != curLevel.key[curNum][j][0][i]) {
                    done = false;
                    break;
                }
                if (grid.current[1][i] != curLevel.key[curNum][j][1][i]) {
                    done = false;
                    break;
                }
            }
            if (done) {
                if (isFull(doneL)){
                    alert("You have completed all levels!");
                    return;
                }
                let a = Math.floor(Math.random()*levels.length);
                let b = Math.floor(Math.random()*stickLevels(ctx)[levels[a]].puzzles.length);
                while (doneL[a][b]) {
                    a = Math.floor(Math.random()*levels.length);
                    b = Math.floor(Math.random()*stickLevels(ctx)[levels[a]].puzzles.length);
                }
                const level = levels[a]
                curLevel = stickLevels(ctx)[level];

                doneButton = curLevel.background.done;
                grid = curLevel.grid;
                curNum = b;
                doneL[a][b] = true;
                break;
            }
        }
    }
    doneButton.update();
}
function isFull(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (!arr[i][j]) {
                return false;
            }
        }
    }
    return true;
}
const gameLoop = new GameLoop(update, draw);
gameLoop.start();
