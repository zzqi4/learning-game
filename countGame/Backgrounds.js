import {AnimateButton} from "../AnimateButton.js"
import {resources} from "../Resource.js"
import {Vector2} from "../utils/Vector2.js"

export const backgrounds = (ctx) => {
    return {
        cafe: {
            frame: resources.images.frame,
            background: resources.images.checkerboard,
            done: new AnimateButton(ctx, resources.images.done, new Vector2(60, 240)),
            textFunction: (desc) => {
                return (ctx, numCorrect) => {
                    ctx.font = '35px youngserif';
                    ctx.fillStyle = 'rgb(250, 241, 227)';
                    ctx.textAlign = 'center';
                    ctx.fillText('Can I have', 210, 80);
                    ctx.font = '55px youngserif';
                    ctx.fillStyle = 'rgb(240, 216, 177)';
                    ctx.fillText(numCorrect, 210, 130);
                    ctx.font = '35px youngserif';
                    ctx.fillStyle = 'rgb(250, 241, 227)';
                    ctx.fillText(desc, 210, 195);
                }
            }
        }
    }
}