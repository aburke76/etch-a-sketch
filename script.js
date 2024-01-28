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
}

function black() {}

function rainbow() {}

function erase() {}

function reset() {}

changeSize(16);
