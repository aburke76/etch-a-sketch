const container = document.querySelector('.squareDivs')
const numberOfSquares = document.querySelector('.numberOfSquares')

let defaultGrid = 16;

for (let i = 0; i < defaultGrid; i++){
    for (let j = 0; j < defaultGrid-1; j++) {
        individualDiv = document.createElement('div')
        container.appendChild(individualDiv)
    }
    individualDiv = document.createElement('div')
    container.appendChild(individualDiv)
}

numberOfSquares.addEventListener('click', () => {
    let userInput = prompt('How many squares would you like per side?')
    for (let i = 0; i < userInput; i++){
        for (let j = 0; j < userInput-1; j++) {
        individualDiv = document.createElement('div')
        container.appendChild(individualDiv)
    }
    individualDiv = document.createElement('div')
    container.appendChild(individualDiv)
}
})