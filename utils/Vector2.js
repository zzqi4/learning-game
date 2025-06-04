export class Vector2{
    constructor(x=0,y=0) {
        this.x = x;
        this.y = y;
    }
    dist(vector){
        return Math.sqrt((this.x - vector.x)**2 + (this.y - vector.y)**2);
    }
    distToLine(point, slope) {
        const dx = this.x - point.x;
        const dy = this.y - point.y;
        return Math.abs(slope * dx - dy) / Math.sqrt(slope * slope + 1);
    }
}