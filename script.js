const DEFAULTSIZE = 16;

let size = DEFAULTSIZE;

const grid = document.querySelector('.grid');

let isDrawing = false;
grid.addEventListener('click', () => {
    isDrawing = !isDrawing;
});

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