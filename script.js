// Constants
const DEFAULTSIZE = 16;
const DEFAULTCOLOR = 'black';

// Variables
let size = DEFAULTSIZE;
let isDrawing = false;
let color = DEFAULTCOLOR;
let pressed = false;
let isRainbow = false;

// DOM references
const grid = document.querySelector('.grid');
const sizeInput = document.querySelector('.size-input');
const sizeDisplay = document.querySelector('.size-display');
const clear = document.querySelector('.clear');
const eraser = document.querySelector('.eraser');
const rainbow = document.querySelector('.rainbow');

// Creating Grid
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

// Drawing
grid.addEventListener('click', () => {
    isDrawing = !isDrawing;
});

function draw(e) {
    if (!isDrawing) return;
    if (pressed) {
        color = 'white';
        this.style = `background-color: ${color}`;
        return;
    }
    if (isRainbow) {
        color = randomColor();
    } else {
        color = 'black';
    }
    this.style = `background-color: ${color}`;
}

// Options
// Size Changing
sizeDisplay.textContent = `Size: ${DEFAULTSIZE}x${DEFAULTSIZE}`;

sizeInput.oninput = function() {
    size = this.value;
    sizeDisplay.innerHTML = `Size: ${size}x${size}`;
    resetGrid();
}

// Clear and Erase
clear.addEventListener('click', resetGrid);

eraser.addEventListener('click', erase);

function resetGrid() {
    clearGrid();
    createGrid(size);
}

function clearGrid() {
    grid.innerHTML = '';
}

function erase(e) {
    pressed = !pressed;
    if (pressed) {
        this.style = 'background-color: #f9cc38';
        color = 'white';
    } else {
        this.style = 'background-color: #ffe9a2';
        color = 'black';
    }
}

// Rainbow Mode
function rainbowMode(e) {
    isRainbow = !isRainbow;
    if (isRainbow) {
        this.style = 'filter: brightness(100%)';
        color = 'black';
    } else {
        this.style = 'filter: brightness(75%);'
        color = randomColor();
    }
}

function randomColor() {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

rainbow.addEventListener('click', rainbowMode);

// Create grid for the first time
createGrid(size);