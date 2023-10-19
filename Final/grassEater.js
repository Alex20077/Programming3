let LivingCreature = require("./livingCreature")
let random = require('./random')
module.exports = class GrassEater extends LivingCreature{
    constructor(x , y) {
        super(x , y)
        this.energy = 20;
        this.directions = [];
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

    eat(){
        let grassesN = this.chooseCell(1)
        let oneGrassN = random(grassesN)
        if(oneGrassN){
            this.energy++;
            matrix[this.y][this.x] = 0;
            this.x = oneGrassN[0];
            this.y = oneGrassN[1];
            matrix[this.y][this.x] = 2;

           for (var i in grassArr) {
                if (this.x == grassArr[i].x  && this.y == grassArr[i].y) {          
                grassArr.splice(i, 1);           
                break;
                }    
                }
        }else{
            this.move()
        }
        if(this.energy>25){
            this.mul()
        }
    }
    move(){
        let emptyCells = this.chooseCell(0)
        let oneEmptyCell = random(emptyCells)
        if(oneEmptyCell){
            this.energy--;
            if(this.energy>0){
                matrix[this.y][this.x] = 0
                this.y = oneEmptyCell[1]
                this.x = oneEmptyCell[0]
                matrix[this.y][this.x] = 2
            }
            else{
                this.die()
            }
        }
    }
    die(){
        matrix[this.y][this.x]=0
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x  && this.y == grassEaterArr[i].y) {          
            grassEaterArr.splice(i, 1);           
            break;
            }   
    }
    }
    mul(){
        let emptyCells = this.chooseCell(0)
        let oneEmptyCell = random(emptyCells)
        if(oneEmptyCell){
           matrix[oneEmptyCell[1]][oneEmptyCell[0]] = 2
           let grassEaterObj = new GrassEater(oneEmptyCell[0],oneEmptyCell[1])
           grassEaterArr.push(grassEaterObj)
           this.energy = this.energy - 20
        }
    }
}

