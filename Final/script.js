
let side = 20
let sideX = 50;
let sideY = 50;
let socket = io();

function setup() {
    createCanvas(side * sideX, side * sideY);
    background('gray')
}


function drawfull(matrix) {
    for (y = 0; y < matrix.length; y++) {
        for (x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill('gray')
                rect(x * side, y * side, side, side)
            } else if (matrix[y][x] == 1) {
                fill('green')
                rect(x * side, y * side, side, side)
            } else if (matrix[y][x] == 2) {
                fill("yellow")
                rect(x * side, y * side, side, side)
            } else if (matrix[y][x] == 3) {
                fill("red")
                rect(x * side, y * side, side, side)
            } else if (matrix[y][x] == 4) {
                fill("blue")
                rect(x * side, y * side, side, side)
            } else if (matrix[y][x] == 5) {
                fill("black")
                rect(x * side, y * side, side, side)
            }
        }
    }
}
socket.on('update matrix', drawfull)


