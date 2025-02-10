const draggables = document.querySelectorAll('.draggable');
const dropZone = document.getElementById('drop-zone');

function dragElement(element) {
    var offsetX = 0, offsetY = 0, curX = 0, curY = 0;
    element.onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e.preventDefault();
        // get the mouse cursor position at startup:
        curX = e.clientX;
        curY = e.clientY;
        document.addEventListener("mouseup", closeDragElement);
        // call a function whenever the cursor moves:
        document.addEventListener("mousemove", elementDrag);
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        offsetX = e.clientX-curX;
        offsetY = e.clientY-curY;
        console.log("startX: " + curX + " startY: " + curY);
        console.log("e.clientX: " + e.clientX + " e.clientY: " + e.clientY);
        console.log("offsetX: " + offsetX + " offsetY: " + offsetY);
        console.log("element.offsetTop: " + element.offsetTop + " element.offsetLeft: " + element.offsetLeft);
        console.log("element.style.top: " + element.style.top + " element.style.left: " + element.style.left);
        // set the element's new position:
        element.style.top = (element.offsetTop + offsetY) + "px";
        element.style.left = (element.offsetLeft + offsetX) +"px";

        curX = e.clientX;
        curY = e.clientY;
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.removeEventListener("mouseup", closeDragElement);
        document.removeEventListener("mousemove", elementDrag);
    }
}

draggables.forEach(draggable => {dragElement(draggable);});
console.log('script.js loaded');
