const DEFAULTSIZE = 16;

let size = DEFAULTSIZE;
let isDrawing = false;

const grid = document.querySelector('.grid');
const sizeInput = document.querySelector('.size-input');
const sizeDisplay = document.querySelector('.size-display');
const clear = document.querySelector('.clear');

sizeDisplay.textContent = `Size: ${DEFAULTSIZE}x${DEFAULTSIZE}`;

sizeInput.oninput = function() {
    size = this.value;
    sizeDisplay.innerHTML = `Size: ${size}x${size}`;
    reloadGrid();
}

grid.addEventListener('click', () => {
    isDrawing = !isDrawing;
});

clear.addEventListener('click', resetGrid);

function resetGrid() {
    clearGrid();
    createGrid(size);
}

function reloadGrid() {
    clearGrid();
    createGrid(size);
}

function clearGrid() {
    grid.innerHTML = '';
}

function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size ** 2; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-item');
        gridElement.addEventListener('mouseover', draw);
        grid.appendChild(gridElement);
    }
}

function draw(e) {
    if (!isDrawing) return;
    this.style = "background-color: black";
}


createGrid(size);