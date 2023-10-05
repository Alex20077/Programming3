class PredatorEater {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.count = 2
        this.directions = []
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    eat() {
        let predatorN = this.chooseCell(3)
        let onePredatorN = random(predatorN)
        if (onePredatorN) {
            this.count--
            matrix[this.y][this.x] = 0
            this.x = onePredatorN[0]
            this.y = onePredatorN[1]
            matrix[this.y][this.x] = 4;
        
        for (var i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i,1);
                break;
            } 
        }
    }else {
        this.move()
    }
    if (this.count <= 0) {
        this.die()
    }
    }

    move() {
        let emptyCells = this.chooseCell(0)
        let oneEmptyCell = random(emptyCells)
        if (oneEmptyCell) {
            matrix[this.y][this.x] = 0
            this.x = oneEmptyCell[0]
            this.y = oneEmptyCell[1]
            matrix[this.y][this.x] = 4
        }
    }


    die() {
        matrix[this.y][this.x] = 0
        for (var i in predatorEaterArr) {
            if (this.x == predatorEaterArr[i].x && this.y == predatorEaterArr[i].y) {
                predatorEaterArr.splice(i, 1);
                break;
            }
        }
    }

    // mul(){
    //     let emptyCells = this.chooseCell(0)
    //     let oneEmptyCell = random(emptyCells)
    //     if(oneEmptyCell){
    //        matrix[oneEmptyCell[1]][oneEmptyCell[0]] = 4
    //        let predatorEaterObj = new PredatorEater(oneEmptyCell[0],oneEmptyCell[1])
    //        predatorEaterArr.push(predatorEaterObj)
    //        this.energy = this.energy - 10
    //     }
    // }
}