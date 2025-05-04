export class AnimateButton {
    constructor(ctx, image, topLeft) {
        this.ctx = ctx;
        this.image = image;
        this.topLeft = topLeft;
        this.scale = 1;
        this.scalingDirection = 0;
    
    }
    click(){
        this.scalingDirection = -1; 
    }  
    update(){
        if (this.scalingDirection === -1) {
            this.scale -= 0.01;
            if (this.scale <= 0.97) { 
                this.scalingDirection = 1;
            }
            //console.log(scale);
        } else if (this.scalingDirection === 1) {
            this.scale += 0.01;
            if (this.scale >= 1) {
                this.scale = 1;
                this.scalingDirection = 0;
            }
        }
    }
    draw(){
        if (this.image.isLoaded) {
            this.ctx.drawImage(this.image.image, this.topLeft.x+100*(1-this.scale), this.topLeft.y, this.image.image.width *this.scale, this.image.image.height* this.scale);
        }
    }
}
export class AnimateSprite{
    constructor(ctx, sprite, topLeft) {
        this.ctx = ctx;
        this.sprite = sprite;
        this.scale = 1;
        this.topLeft = topLeft;
        this.scalingDirection = 0;
        this.scaleFactor = sprite.scale;
    }
    click(){
        this.scalingDirection = -1; 
        this.sprite.frame +=1;
    }
    update(){
        if (this.scalingDirection === -1) {
            this.scale -= 0.03;
            if (this.scale <= 0.999) { 
                this.scalingDirection = 1;
            }
        } else if (this.scalingDirection === 1) {
            this.scale += 0.03;
            if (this.scale >= 1) {
                this.scale = 1;
                this.scalingDirection = 0;
            }
        }
        this.sprite.scale = this.scale * this.scaleFactor;
    }
    back(){
        this.sprite.frame -=1;
    }
    draw(){
        this.sprite.drawImage(this.ctx, this.topLeft.x, this.topLeft.y);
    }
}