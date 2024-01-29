const board = document.querySelector(".board");
const resetButton = document.querySelector(".reset");
const eraseButton = document.querySelector(".erase");
const rainbowButton = document.querySelector(".rainbow");
const sizeButton = document.querySelector(".changeSize");
const blackButton = document.querySelector(".black");
const colorPicker = document.querySelector("#color");

function changeSize(num) {
    let numSq = num * num;
    for (let i = 0; i < num * num; i++) {
        let grid = document.createElement("div");
        grid.className = "box";
        board.appendChild(grid);
    }
    const box = document.querySelectorAll(".box");
    let height = 600 / num;
    let width = 600 / num;
    box.forEach((element) => {
        element.style.height = `${height}px`;
        element.style.width = `${width}px`;
    });
    reset();
    black();
}
function black() {
    const box = document.querySelectorAll(".box");
    box.forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = "black";
        });
    });
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function rainbow() {
    const box = document.querySelectorAll(".box");
    box.forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = randomColor();
        });
    });
}

function erase() {
    const box = document.querySelectorAll(".box");
    box.forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = "white";
        });
    });
}

function reset() {
    const box = document.querySelectorAll(".box");
    box.forEach((element) => {
        element.style.backgroundColor = "white";
    });
    black();
}

function pickColor() {
    const box = document.querySelectorAll(".box");
    box.forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = colorPicker.value;
        });
    });
}

resetButton.addEventListener("click", reset);
eraseButton.addEventListener("click", erase);
blackButton.addEventListener("click", black);
rainbowButton.addEventListener("click", rainbow);
colorPicker.addEventListener("change", pickColor);
sizeButton.addEventListener("click", () => {
    const box = document.querySelectorAll(".box");
    box.forEach((element) => {
        element.remove();
    });
    let input = prompt("Pick a size! (please keep it between 1 and 100)");
    while (input > 101 || input < 2) {
        input = prompt("Pick a size! (please keep it between 1 and 100)");
    }
    changeSize(input);
});

black();
changeSize(16);
