let side = 30
let socket = io();

let count = 0;
season.addEventListener("click" , exanak)
function exanak(){
    count++
    if (count % 2 == 0) {
        season.innerHTML = 'Amar'
    } 
    else {
        season.innerHTML = 'Dzmer'
    }


    socket.emit("update season", count);

}
bomb.addEventListener("click", paytyun)

function paytyun(){
    gmp = true
    socket.emit("paytyun", gmp)
    gmp = false
}

function setup() {
    createCanvas(1500, 1500);
    background('gray')
}



function drawfull(matrix) {
    for (y = 0; y < matrix.length; y++) {
        for (x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill('gray')
                rect(x * side, y * side, side, side)
            } else if (matrix[y][x] == 1 && season.innerHTML == "Dzmer") {
                fill('white')
                rect(x * side, y * side, side, side)
            }else if (matrix[y][x] == 1 && season.innerHTML == "Amar") {
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
            else if (matrix[y][x] == 6) {
                fill("orange")
                rect(x * side, y * side, side, side)
            } else if (matrix[y][x] == 7) {
                fill("purple")
                rect(x * side, y * side, side, side)
            }
        }
       
function countAllChar() {
    var allGrassCount = 0;
    var allGrassEaterCount = 0;
    var allPredatorCount = 0;
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                allGrassCount++;
                data.allGrass = allGrassCount
            }
            if (matrix[y][x] == 2) { 
                allGrassEaterCount++;
                data.allGrassEater = allGrassEaterCount
            }
            if (matrix[y][x] == 3) { 
                allPredatorCount++;
                data.allPredator = allPredatorCount
            }
        }
    }

    return data
}
socket.emit('Total statistics', countAllChar())
    socket.on('display statistics', (data) => {
        statistics = data

        var updatedText = '';
        for (var key in statistics) {
            updatedText += '\n' + key + ' ' + statistics[key];
        }
        p.innerText = updatedText;


    })
}

    }
    var data = {}

    var p = document.createElement('p')
    document.body.appendChild(p)
    
socket.on('update matrix', drawfull)