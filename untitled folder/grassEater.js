class GrassEater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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

