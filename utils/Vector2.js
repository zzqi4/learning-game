export class Vector2{
    constructor(x=0,y=0) {
        this.x = x;
        this.y = y;
    }
    dist(vector){
        return Math.sqrt((this.x - vector.x)**2 + (this.y - vector.y)**2);
    }
}