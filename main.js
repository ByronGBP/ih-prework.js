

var grid = [[".",".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".",".","."],
["X",".",".",".",".",".",".",".",".","."]];

var gridDisplay = "";
var oldPositionRover2 = {};


function goRover() {

  var movements = "fffrfflfffbb";
  setupRovers();

  for (var i = 0; i < movements.length ; i++) {

    doMovement(movements[i]);
    updateGrid();

  }
}

function doMovement(movement) {

  switch(movement) {
    case 'f':
      myRover.goForward();
      break;
    case 'b':
      myRover.goBackward();
      break;
    case 'r':
      myRover.turnRigth();
      break;
    case 'l':
      myRover.turnLeft();
      break;
  }

  myRover.showReport();

}

function displayGrid() {

  gridDisplay = "";

  for (var i = 0; i < grid.length; i++) {
    for(var j = 0; j < grid[i].length; j++) {
      gridDisplay+= (grid[i][j] + " ");
    }
    drawCoordinates(i);
    gridDisplay += "\n";
  }

  console.log(gridDisplay);

}

function drawCoordinates(i) {

  if (i === 2) {
    gridDisplay += "        N"; //8 espacios
  }
  if (i === 3 || i === 5) {
    gridDisplay += "        |"; //8 espacios
  }
  if (i === 4) {
    gridDisplay += "     W - - E"; //5 espacios
  }
  if (i === 6) {
    gridDisplay += "        S"; //8 espacios
  }

}

function updateGrid() {

  var posX = myRover.oldPosition.x;
  var posY = myRover.oldPosition.y;


  grid[posX][posY] = ".";
  grid[myRover.position[0]][myRover.position[1]] = 'R';

  posX = oldPositionRover2[0];
  posY = oldPositionRover2[1];

  grid[posX][posY] = '.';

  oldPositionRover2 = myRover2.position;
  grid[myRover2.position[0]][myRover2.position[1]] = 'T';


  displayGrid();

}

function setupRovers() {

  myRover.position = [0,1];
  myRover.oldPosition.x = 0;
  myRover.oldPosition.y = 1;

  myRover2.position = [1,2];
  oldPositionRover2 = myRover2.position;

  updateGrid();

}

goRover();
