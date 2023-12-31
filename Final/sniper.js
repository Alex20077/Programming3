let LivingCreature = require("./livingCreature")
let random = require('./random')
module.exports = class Sniper extends LivingCreature{
    constructor(x, y){
        super(x , y)
        this.count = 3
        this.directions = []
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 3, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 3, this.y + 3]
        ];

    }

    chooseCell(character) {
        this.getNewCoordinates()
        return super.chooseCell(character)

    }

    eat() {
        let grassEaterN = this.chooseCell(2)
        let predatorN = this.chooseCell(3)
        let predatorEaterN = this.chooseCell(4)
        let all = predatorN.concat(predatorEaterN,grassEaterN)
        let oneN = random(all)
        if (oneN) {
            this.count--
            matrix[this.y][this.x] = 0
            this.x = oneN[0]
            this.y = oneN[1]
            matrix[this.y][this.x] = 5;
        
        for (var i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i,1);
                break;
            } 
        }
        for (var i in predatorEaterArr) {
            if (this.x == predatorEaterArr[i].x && this.y == predatorEaterArr[i].y) {
                predatorEaterArr.splice(i,1);
                break;
            } 
        }
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
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
        if(oneEmptyCell){
            matrix[this.y][this.x] = 0
            this.x = oneEmptyCell[0]
            this.y = oneEmptyCell[1]
            matrix[this.y][this.x] = 5
        }
    }

    die() {
        matrix[this.y][this.x] = 0
        for (var i in sniperArr) {
            if (this.x == sniperArr[i].x && this.y == sniperArr[i].y) {
                sniperArr.splice(i, 1);
                break;
            }
        }
    }

}