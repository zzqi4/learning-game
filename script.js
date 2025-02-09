const draggables = document.querySelectorAll('.draggable');
const dropZone = document.getElementById('drop-zone');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    const draggedElement = document.querySelector('.dragging');
    if (draggedElement) {
        dropZone.appendChild(draggedElement);
    }
});