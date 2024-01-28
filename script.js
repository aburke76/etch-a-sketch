const board = document.querySelector(".board");

function changeSize(num) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num - 1; j++) {
            let grid = document.createElement("div");
            grid.className = "box";
            board.appendChild(grid);
        }
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
}

function black() {
    const box = document.querySelectorAll(".box");
    box.addEventListener("mousedown", () => {
        box.forEach((element) => {
            element.style.backgroundColor = black;
        });
    });
}

function rainbow() {}

function erase() {}

function reset() {}

changeSize(16);
