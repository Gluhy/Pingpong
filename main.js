const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 500;

const cw = canvas.width;
const ch = canvas.height;

const ballSize = 20;

let ballX = cw / 2 - ballSize / 2;
let ballY = ch / 2 - ballSize / 2;

const paddelHeight = 100;
const paddelWidth = 20;

const playerX = 70;
const aiX = 910;

let playerY = 200;
let aiY = 200;

const lineWidth = 6;
const lineHeight = 16;

let ballSpeedX = 5;
let ballSpeedY = 0;

function player(){
    ctx.fillStyle = "#83fc03";
    ctx.fillRect( playerX, playerY, paddelWidth, paddelHeight);
}

function ai(){
    ctx.fillStyle = "yellow";
    ctx.fillRect( aiX, aiY, paddelWidth, paddelHeight);
}

function table(){
    //Stół
    ctx.fillStyle = "#111111";
    ctx.fillRect(0,0,cw,ch);
    //Linie
    for (let linePosition = 20; linePosition < ch; linePosition += 30){
        ctx.fillStyle = "gray"
        ctx.fillRect(cw/2 - lineWidth/2, linePosition, lineWidth, lineHeight)
    }
}

function ball(){
    ctx.fillStyle = "white";
    ctx.fillRect( ballX, ballY, ballSize, ballSize);

    ballX += ballSpeedX
    ballY += ballSpeedY

    if (ballY <= 0 || ballY + ballSize >= ch){
        ballSpeedY = -ballSpeedY
        speedUp()
    }

    if (ballX <= 0 || ballX + ballSize >= cw){
        ballSpeedX = -ballSpeedX
        speedUp()
    }
}

topCanvas = canvas.offsetTop


function playerPosition(e) {
    playerY = e.clientY - topCanvas - (paddelHeight/2);

    if(playerY >= ch-paddelHeight){
        playerY = ch-paddelHeight
    }

    if(playerY <= 0){
          playerY = 0
    }
    aiY = playerY
}

function speedUp() {
    //predkosc X
    if(ballSpeedX > 0 && ballSpeedX < 16){
        ballSpeedX += .4
    }
    else if (ballSpeedX < 0 && ballSpeedX > -16){
        ballSpeedX -= .4
    }
    if(ballSpeedY > 0 && ballSpeedY < 16){
        ballSpeedY += .2
    }
    else if (ballSpeedY < 0 && ballSpeedY > -16){
        ballSpeedY -= .2
    }
}

function aiPosition(){

    const middlePaddel = aiY + paddelHeight/2
    const middleBall = ballY + ballSize/2

    if(ballX > 500){
        if(middlePaddel - middleBall >200){

        }
        else if(middlePaddel - middleBall > 50){
            
        }
        else if(middlePaddel - middleBall > 50){
            
        }
    }
    else if(ballX <= 500 && ballX > 150){

    }
}

function paddle(){
    if(ballX <= playerX + paddelWidth && ballY + ballSize >= playerY && ballY + ballSize <= playerY + paddelHeight){
       ballSpeedX= -ballSpeedX
    }

    if(ballX + ballSize >= aiX && ballY + ballSize >= aiY && ballY + ballSize <= aiY + paddelHeight){
        ballSpeedX = -ballSpeedX
     }

}

function points(){
    if (ballX < playerX + paddelWidth && ballY + ballSize < playerY){
        ballX = cw / 2 - ballSize / 2;
        ballY = ch / 2 - ballSize / 2;
        ballSpeedX = 5
        ballSpeedY = 5
    }
    else if (ballX < playerX + paddelWidth && ballY > playerY + paddelHeight){
        ballX = cw / 2 - ballSize / 2;
        ballY = ch / 2 - ballSize / 2;
        ballSpeedX = 5
        ballSpeedY = 5
    }
   
    if (ballX + ballSize >= aiX && ballY + ballSize < aiY){
        ballX = cw / 2 - ballSize / 2;
        ballY = ch / 2 - ballSize / 2;
        ballSpeedX = 5
        ballSpeedY = 5
    }

    else if (ballX + ballSize >= aiX && ballY > aiY + paddelHeight){
        ballX = cw / 2 - ballSize / 2;
        ballY = ch / 2 - ballSize / 2;
        ballSpeedX = 5
        ballSpeedY = 5
    }
    ballSpeedY = 0
}


canvas.addEventListener("mousemove", playerPosition)

function game(){
table();
ball();
player();
ai();
aiPosition()
paddle()
points()
}

setInterval(game, 1000/60)
