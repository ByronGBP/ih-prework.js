
//TODO: Debugar: Rover 2 [8,0] Direction: E, con los movimientos actuales.
//TODO: Automatizar el setup con valores randoms tanto para el grid, y los valores de los Rovers.
//TODO: Crear un boton para poder realizar los setups.
//TODO: CleanCode de los objetos Rover.

var grid = [[".",".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".","X",".","."],
[".",".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".",".","."],
[".",".",".",".",".","X",".",".",".","."],
[".",".",".",".",".",".",".",".","X","."],
[".","X",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".","X",".",".","."],
["X",".",".",".",".",".",".",".",".","."]];

var gridDisplay = "";
var movementsRover1 = "";
var movementsRover2 = "";

function doMovement(movement, rover) {

  switch(movement) {
    case 'f':
      rover.goForward();
      break;
    case 'b':
      rover.goBackward();
      break;
    case 'r':
      rover.turnRigth();
      break;
    case 'l':
      rover.turnLeft();
      break;
  }

  rover.showReport();

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
    if (i === 3) { gridDisplay += "      R: Rover 1"; }
    else { gridDisplay += "      X: Obstacle"; }
  }
  if (i === 4) {
    gridDisplay += "     W - - E   T: Rover 2"; //5 espacios
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

  posX = myRover2.oldPosition.x;
  posY = myRover2.oldPosition.y;

  grid[posX][posY] = '.';
  grid[myRover2.position[0]][myRover2.position[1]] = 'T';

  displayGrid();

}

function setupRovers() {

  movementsRover1 = "fffrfflfffbb";
  movementsRover2 = "ffblfbfflfbf";

  myRover.position = [0,1];
  myRover.oldPosition.x = myRover.position[0];
  myRover.oldPosition.y = myRover.position[1];

  myRover2.position = [1,2];
  myRover2.oldPosition.x = myRover2.position[0];
  myRover2.oldPosition.y = myRover2.position[1];

  updateGrid();

}

function goRover() {
  //PRE:- Same numbers of movement for each Rover.

  setupRovers();

  for (var i = 0; i < movementsRover1.length ; i++) {

    doMovement(movementsRover1[i], myRover);
    doMovement(movementsRover2[i], myRover2);
    updateGrid();

  }
}

goRover();
