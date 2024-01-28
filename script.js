const board = document.querySelector(".board");
const resetButton = document.querySelector(".reset");
const eraseButton = document.querySelector(".erase");
const rainbowButton = document.querySelector(".rainbow");
const sizeButton = document.querySelector(".changeSize");
const blackButton = document.querySelector(".black");

function changeSize(num) {
    let numSq = num * num;
    for (let i = 0; i < num * num; i++) {
        let grid = document.createElement("div");
        grid.className = "box";
        board.appendChild(grid);
    }
    const box = document.querySelectorAll(".box");
    let height = 400 / num;
    let width = 400 / num;
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

function randRGB() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rbg(${r}, ${g}, ${b})`;
}

function rainbow() {
    const box = document.querySelectorAll(".box");
    box.forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = randRGB();
        });
    });
}

function erase() {
    const box = document.querySelectorAll(".box");
    box.forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = "";
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

resetButton.addEventListener("click", reset);
eraseButton.addEventListener("click", erase);
blackButton.addEventListener("click", black);
rainbowButton.addEventListener("click", rainbow);
sizeButton.addEventListener("click", () => {
    const box = document.querySelectorAll(".box");
    box.forEach((element) => {
        element.remove();
    });
    let input = prompt("Pick a size! (please keep it between 1 and 128)");
    if (input > 128 || input < 1) {
        input = prompt("Pick a size! (please keep it between 1 and 128)");
    }
    if (input === 1) {
        alert("What can you draw with this? Oh well, if you insist.");
        changeSize(1);
    } else {
        changeSize(input);
    }
});

black();
changeSize(16);
