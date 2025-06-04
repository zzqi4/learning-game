import {backgrounds} from "../Backgrounds.js";
import {AnimateSprite} from "../AnimateButton.js";
import {Sprite} from "../Sprite.js";
import {resources} from "../Resource.js";
import {Vector2} from "../utils/Vector2.js";
import {formatter} from "../utils/Formatter.js";
import {Rectangle} from "../utils/Rectangle.js";
export const clickerLevels = (ctx) => {
    return {
        bread:{
            background: backgrounds(ctx).cafe,

            clicker: new AnimateSprite(ctx, new Sprite({
                resource: resources.images.bread,
                frameSize: new Vector2(500,450),
                hFrames: 3,
                vFrames:3,
                frame:0,
                scale:0.8
            }), new Vector2(20, 350)),
            clickerOut: resources.images.breadslice.image,
            maxnumClicked: 7,
            coordinates: formatter(3,3,new Rectangle(new Vector2(500, 20), new Vector2(1280, 720))),
            textFunction: backgrounds(ctx).cafe.textFunction('Can I have', 'slices of bread?')
        },
        cookies:{
            background: backgrounds(ctx).cafe,
            clicker: new AnimateSprite(ctx, new Sprite({
                resource: resources.images.cookies,
                frameSize: new Vector2(860,493),
                hFrames: 7,
                vFrames:1,
                frame:0,
                scale:0.5
            }), new Vector2(20, 400)),
            clickerOut: resources.images.cookie.image,
            maxnumClicked: 6,
            coordinates: formatter(3,3,new Rectangle(new Vector2(500, 20), new Vector2(1280, 720))),
            textFunction: backgrounds(ctx).cafe.textFunction('Can I have', 'cookies?')
        }
    }
}