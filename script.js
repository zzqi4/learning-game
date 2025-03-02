import { DragElement } from "./DragElement.js";

const draggables = document.querySelectorAll('.draggable');
const dropZone = document.getElementById('drop-zone');
const blockZone = document.getElementById('blocks');


draggables.forEach(draggable => {new DragElement(draggable, dropZone, blockZone)});
