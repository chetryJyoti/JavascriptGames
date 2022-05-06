const grid = document.querySelector(".grid");
const blockWidth = 100;
const blockHeight = 20;
const bordWidth = 590;
const ballDiameter=20;
const playerStart = [240, 15];
let currentPos = playerStart;
const ballStart = [275, 40];
let ballCurrentPos = ballStart;
let timerId


// create block
// blocks position
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockHeight];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
  }
}

const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(240, 270),
  new Block(360, 270),
  new Block(480, 270),

  new Block(10, 240),
  new Block(120, 240),
  new Block(240, 240),
  new Block(360, 240),
  new Block(480, 240),

  new Block(10, 210),
  new Block(120, 210),
  new Block(240, 210),
  new Block(360, 210),
  new Block(480, 210),
];
console.log(blocks);
// draw the block inside the grid
function addBlock() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomRight[1] + "px";
    grid.appendChild(block);
  }
}
addBlock();

// add player block
let player = document.createElement("div");
player.classList.add("player");
drawPlayer();
grid.appendChild(player);

// draw the player
function drawPlayer() {
  player.style.left = currentPos[0] + "px";
  player.style.bottom = currentPos[1] + "px";
}

// draw ball
function drawBall() {
  ball.style.left = ballCurrentPos[0] + "px";
  ball.style.bottom = ballCurrentPos[1] + "px";
}

// move player
function movePlayer(e) {
  switch (e.key) {
    case "ArrowLeft":
      if (currentPos[0] > 0) {
        currentPos[0] -= 10;
        drawPlayer();
      }
      break;
    case "ArrowRight":
      if (currentPos[0] < bordWidth - blockWidth) {
        currentPos[0] += 10;
        drawPlayer();
      }
      break;
  }
}
document.addEventListener("keydown", movePlayer);

// add ball
const ball = document.createElement("div");
ball.classList.add("ball");
drawBall();
grid.appendChild(ball);

// move ball
function moveBall() {
  ballCurrentPos[0]+=2;
  ballCurrentPos[1]+=2;
  drawBall()
}
timerId=setInterval(moveBall,300)

// chek for collisisons
function checkForCollisions(){
  // check for wall collisions
  if(ballCurrentPos[0]>=(bordWidth-ballDiameter)){
    changeDirection();
  }
}
// to be continued  tomorrow
function changeDirection(){

}