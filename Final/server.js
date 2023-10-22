var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get("/", function (req, res) {
   res.redirect("index.html");
});

server.listen(3000, function () {

   console.log("App is running on port 3000");

});


let Grass = require('./grass.js')
let GrassEater = require('./grassEater.js')
let Predator = require('./predator.js')
let PredatorEater = require('./predatorEater.js')
let Sniper = require('./sniper.js')
let Bomb = require("./bomb.js")
let Immortal = require("./immortal.js")
grassArr = []
grassEaterArr = []
matrix = []
predatorArr = []
predatorEaterArr = []
sniperArr = []
bombArr = []
immortalArr = []

function matrixGenerator(sideX, sideY, countG, countGrE, countPr, countPrE, countS, countB, countI) {
   let arr = []
   for (let i = 0; i < sideX; i++) {
      arr.push([])
      for (let j = 0; j < sideY; j++) {
         arr[i].push(0)
      }
   }

   for (let j = 0; j < countG; j++) {
      let x = Math.floor(Math.random() * sideX)
      let y = Math.floor(Math.random() * sideY)
      arr[y][x] = 1
   }

   for (let i = 0; i < countGrE; i++) {
      let x = Math.floor(Math.random() * sideX)
      let y = Math.floor(Math.random() * sideY)
      arr[y][x] = 2
   }

   for (let j = 0; j < countPr; j++) {
      let x = Math.floor(Math.random() * sideX)
      let y = Math.floor(Math.random() * sideY)
      arr[y][x] = 3
   }
   for (let j = 0; j < countPrE; j++) {
      let x = Math.floor(Math.random() * sideX)
      let y = Math.floor(Math.random() * sideY)
      arr[y][x] = 4
   }
   for (let j = 0; j < countS; j++) {
      let x = Math.floor(Math.random() * sideX)
      let y = Math.floor(Math.random() * sideY)
      arr[y][x] = 5
   }
   for (let j = 0; j < countB; j++) {
      let x = Math.floor(Math.random() * sideX)
      let y = Math.floor(Math.random() * sideY)
      arr[y][x] = 6
   }
   for (let j = 0; j < countI; j++) {
      let x = Math.floor(Math.random() * sideX)
      let y = Math.floor(Math.random() * sideY)
      arr[y][x] = 7
   }


   return arr;
}

function setupGame(){
   matrix = matrixGenerator(50,50,8,5,10,10,5,0,1)
   for(let y = 0;y<matrix.length;y++){
      for(let x = 0;x<matrix[y].length;x++){
          if(matrix[y][x]==1){                        
              var grassObj = new Grass(x,y)
              grassArr.push(grassObj)
          }else if(matrix[y][x]==2){
              let grassEaterObj = new GrassEater(x,y)
              grassEaterArr.push(grassEaterObj)
          }else if(matrix[y][x]==3){
              let predatorObj = new Predator(x,y)
              predatorArr.push(predatorObj)
          }else if(matrix[y][x]==4){
              let predatorEaterObj = new PredatorEater(x,y)
              predatorEaterArr.push(predatorEaterObj)
          }else if(matrix[y][x]==5){
              let sniperObj = new Sniper(x,y)
              sniperArr.push(sniperObj)
          }else if(matrix[y][x]==6){
            let bombObj = new Bomb(x,y)
            bombArr.push(bombObj)
        }else if(matrix[y][x]==7){
         let immortalObj = new Immortal(x,y)
         immortalArr.push(immortalObj)
     }
      }
  }
}

function playGame(){
   for (let i = 0; i < grassArr.length; i++) {
      grassArr[i].mull()
  }
  for (i = 0; i < grassEaterArr.length; i++) {
      grassEaterArr[i].eat()
  }
  for (i = 0; i < predatorArr.length; i++) {
      predatorArr[i].eat()
  }
  for (i = 0; i < predatorEaterArr.length; i++) {
      predatorEaterArr[i].eat()
  }
  for (i = 0; i < sniperArr.length; i++) {
      sniperArr[i].eat()
  }
  for (i = 0; i < immortalArr.length; i++) {
   immortalArr[i].eat()
}
for (i = 0; i < bombArr.length; i++) {
   bombArr[i].eat()
}
  io.emit('update matrix', matrix)
}

io.on("connection" , function (socket){
   socket.emit('update matrix', matrix)
   setupGame()
   startPlaying()
})



let intervalID;




function startPlaying(){
   clearInterval(intervalID);
   intervalID = setInterval(() => {
      playGame()  
   }, intervalID);
}



