import {backgrounds} from "../Backgrounds.js";
import {resources} from "../Resource.js";
import {Vector2} from "../utils/Vector2.js";
import {Grid} from "./Grid.js";
import {TGrid} from "./Grid.js";
export const stickLevels = (ctx) => {
    return {
        a:{
            background: backgrounds(ctx).cafe,
            grid: new Grid(3, 3, new Vector2(600, 60), resources.images.pretzelV.image, resources.images.pretzelH.image),
            textFunction: (ctx, a, b) => {
                ctx.font = '70px youngserif';
                ctx.fillStyle = 'rgb(240, 216, 177)';
                ctx.fillText(a, 93, 140);
                ctx.drawImage(resources.images.square.image, 30, 50);
                ctx.fillText(b, 300, 140);
                ctx.globalAlpha = 0.5;
                ctx.drawImage(resources.images.pretzelH.image, 240, 192, 160, 20);
                ctx.globalAlpha = 1;
            },
            key: [
                [[[true, false, true, true, true, true, true, true, true, true, false, true],
                [true, true, true, true, false, true, true, false, true, true, true, true]]],

                [[[true, false, true, true, false, true, true, false, true, true, false, true],//center
                [true, true, true, true, false, false, false, false, true, true, true, true]],
                [[false, false, true, false, true, true, true, true, true, true, false, true],//topLeft
                [false, false, true, true, false, true, true, false, true, true, true, true]],
                [[true, false, false, true, true, false, true, true, true, true, false, true],//topRight
                [true, true, false, false, false, true, true, false, true, true, true, true]],
                [[true, false, true, true, true, true, false, true, true, false, false, true],//bottomLeft
                [true, true, true, true, false, true, true, false, false, false, true, true]],
                [[true, false, true, true, true, true, true, true, false, true, false, false],//bottomLeft
                [true, true, true, true, false, true, true, false, true, true, false, false]]]
            ],
            puzzles:[[5,4], [4, 8]]
            
            
        },
        b:{
            background: backgrounds(ctx).cafe,
            grid: new TGrid(3, new Vector2(850, 60), resources.images.pretzelL.image,resources.images.pretzelR.image,resources.images.pretzelH.image),
            textFunction: (ctx, a, b) => {
                ctx.font = '70px youngserif';
                ctx.fillStyle = 'rgb(240, 216, 177)';
                ctx.fillText(a, 93, 140);
                ctx.drawImage(resources.images.square.image, 30, 50);
                ctx.fillText(b, 300, 140);
                ctx.globalAlpha = 0.5;
                ctx.drawImage(resources.images.pretzelH.image, 240, 192, 160, 20);
                ctx.globalAlpha = 1;
            },
            key: [
                [[[true, false, true, true, true, true, true, true, true, true, false, true],
                [true, true, true, true, false, true, true, false, true, true, true, true]]],

                [[[true, false, true, true, false, true, true, false, true, true, false, true],//center
                [true, true, true, true, false, false, false, false, true, true, true, true]],
                [[false, false, true, false, true, true, true, true, true, true, false, true],//topLeft
                [false, false, true, true, false, true, true, false, true, true, true, true]],
                [[true, false, false, true, true, false, true, true, true, true, false, true],//topRight
                [true, true, false, false, false, true, true, false, true, true, true, true]],
                [[true, false, true, true, true, true, false, true, true, false, false, true],//bottomLeft
                [true, true, true, true, false, true, true, false, false, false, true, true]],
                [[true, false, true, true, true, true, true, true, false, true, false, false],//bottomLeft
                [true, true, true, true, false, true, true, false, true, true, false, false]]]
            ],
            puzzles:[[5,4], [4, 8]]
            
            
        }
    }
}