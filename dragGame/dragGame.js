import { DragElements } from "./DragElement.js";


const draggables = document.querySelectorAll('.draggable');
const dropZones = document.querySelectorAll('.drop-zone');
const blockZone = document.getElementById('blocks');

draggables.forEach(draggable => {new DragElements(dropZones, blockZone)});
