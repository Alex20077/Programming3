class PredatorEater extends LivingCreature{
    constructor(x , y ) {
        super(x , y)
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
        return super.chooseCell(character)
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