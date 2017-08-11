function goRover(rover) {

  var movements = "fffrfflfffbb";


  for (var i = 0; i < movements.length ; i++) {

    doMovement(movements[i], rover);

  }

}

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

goRover(myRover);
