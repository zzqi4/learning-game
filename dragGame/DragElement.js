export class DragElements{
    constructor(dropZones, blockZone){
        this.curElement = null;
        this.offsetX = 0;
        this.offsetY = 0;
        this.startDrag = this.startDrag.bind(this);
        this.drag = this.drag.bind(this);
        this.stopDrag = this.stopDrag.bind(this);
        this.blockZone = blockZone;
        this.blockZone.addEventListener("mousedown", this.startDrag);
        this.dropZones = dropZones;
        this.usedDropZones = [];
    }
    startDrag(event) {
        event.preventDefault();
        if (!event.target.classList.contains("draggable")) return;
        this.curElement = event.target;
        this.offsetX = event.clientX - this.curElement.offsetLeft;
        this.offsetY = event.clientY - this.curElement.offsetTop;

        const y = this.curElement.offsetTop;
        const x = this.curElement.offsetLeft;
        this.curElement.style.position = "absolute";
        this.curElement.style.top = y + "px";
        this.curElement.style.left = x + "px";   
        document.addEventListener("mouseup", this.stopDrag);
        document.addEventListener("mousemove", this.drag);
        
    }
    
    drag(event) {
        event.preventDefault();
        this.curElement.style.top = (event.clientY - this.offsetY) + "px";
        this.curElement.style.left = (event.clientX - this.offsetX)+ "px";  
    }
    
    stopDrag(event) {
        document.removeEventListener("mouseup", this.stopDrag);
        document.removeEventListener("mousemove", this.drag);
        const dropZonei = this.inDropZone();
        console.log(dropZonei);
        if (dropZonei > -1) {
            this.dropZones[dropZonei].appendChild(this.curElement);
            this.curElement.style.position = "relative";
            this.curElement.style.top = "0px"; 
            this.curElement.style.left = "0px"; 
            this.playDropAnimation();
            this.usedDropZones[dropZonei] = true;
            this.curElement = null;
            return;
            
        }else{
            this.blockZone.appendChild(this.curElement);
            this.curElement.style.position = "relative";
            this.curElement.style.top = "0px"; 
            this.curElement.style.left = "0px"; 
            this.curElement = null;
        }
    }
    
    inDropZone() {
        for (let i = 0; i < this.dropZones.length; i++) {
            if (this.usedDropZones[i]) continue;
            const blockRect = this.curElement.getBoundingClientRect();
            const dropRect = this.dropZones[i].getBoundingClientRect();
            console.log(blockRect);
            console.log(dropRect);
            if ((blockRect.right >= dropRect.left && blockRect.bottom >= dropRect.top) && (blockRect.left <= dropRect.right && blockRect.top <= dropRect.bottom)){
                return i;
            }
        }
        return -1;
        
    }
    playDropAnimation() {
        this.curElement.style.animation = "bob 0.5s ease-in-out";
    }
}
