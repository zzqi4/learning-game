export class DragElement{
    constructor(element, dropZone, blockZone){
        this.e = element;
        this.offsetX = 0;
        this.offsetY = 0;
        this.curX = this.e.offsetLeft;
        this.curY = this.e.offsetTop;
        this.startDrag = this.startDrag.bind(this);
        this.drag = this.drag.bind(this);
        this.stopDrag = this.stopDrag.bind(this);
        this.e.addEventListener("mousedown", this.startDrag);
        this.blockZone = blockZone;
        this.dropZone = dropZone;
    }
    startDrag(event) {
        this.curX = this.e.offsetLeft;
        this.curY = this.e.offsetTop;
        event.preventDefault();
        this.e.style.position = "absolute";
        this.e.style.top = this.curY + "px";
        this.e.style.left = this.curX + "px";
        this.curX = event.clientX;
        this.curY = event.clientY;
        document.addEventListener("mouseup", this.stopDrag);
        document.addEventListener("mousemove", this.drag);
        
    }
    
    drag(event) {
        console.log("dragging");
        event.preventDefault();
        this.offsetX = event.clientX-this.curX;
        this.offsetY = event.clientY-this.curY;
        this.e.style.top = (this.e.offsetTop + this.offsetY) + "px";
        this.e.style.left = (this.e.offsetLeft + this.offsetX) +"px";
    
        this.curX = event.clientX;
        this.curY = event.clientY;
    }
    
    stopDrag(event) {
        console.log("a")
        document.removeEventListener("mouseup", this.stopDrag);
        document.removeEventListener("mousemove", this.drag);
        if (this.inDropZone()) {
            console.log("hi")
            this.dropZone.appendChild(this.e);
            this.e.style.position = "relative";
            this.e.style.top = "0px"; 
            this.e.style.left = "0px"; 
            console.log(`${this.e.innerText} added to drop zone`);
        }
        else{
            this.blockZone.appendChild(this.e);
            this.e.style.position = "relative";
            this.e.style.top = "0px"; 
            this.e.style.left = "0px"; 
        }
    }
    
    inDropZone() {
        const blockRect = this.e.getBoundingClientRect();
        const dropRect = this.dropZone.getBoundingClientRect();
    
        return (
            blockRect.right >= dropRect.left &&
            blockRect.bottom >= dropRect.top 
        );
    }
}
