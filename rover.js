var myRover = {
  position: [0,0],
  direction: 'N',

  goForward: function() {

    switch(this.direction) {
      case 'N':
        this.goNorth();
        break;
      case 'E':
        this.goEst();
        break;
      case 'S':
        this.goSouth();
        break;
      case 'W':
        this.goWest();
        break;
    }
  },

  goBackward: function() {

    switch(this.direction) {
      case 'N':
        this.goSouth();
        break;
      case 'E':
        this.goWest();
        break;
      case 'S':
        this.goNorth();
        break;
      case 'W':
        this.goEst();
        break;
    }
  },


  turnLeft: function() {

    switch(this.direction) {
      case 'N':
        this.toWest();
        break;
      case 'E':
        this.toNorth();
        break;
      case 'S':
        this.toEst();
        break;
      case 'W':
        this.toSouth();
        break;
    }
  },

 turnRigth: function() {

    switch(this.direction) {
      case 'N':
        this.toEst();
        break;
      case 'E':
        this.toSouth();
        break;
      case 'S':
        this.toWest();
        break;
      case 'W':
        this.toNorth();
        break;
    }
  },

  toNorth: function() { this.direction = "N"; },

  toEst: function() { this.direction = "E"; },

  toWest: function() { this.direction = "W"; },

  toSouth: function() { this.direction = "S"; },

  goNorth: function() { if(this.isCorrectPosition("N")) {this.position[1]--;} },

  goEst: function() { if(this.isCorrectPosition("E")) {this.position[0]++;} },

  goSouth: function() { if(this.isCorrectPosition("S")) {this.position[1]++;} },

  goWest: function() { if(this.isCorrectPosition("W")) {this.position[0]--;} },

  isCorrectPosition: function(toDirection){

    switch(toDirection) {
      case 'N':
        if (this.position[1] === 0) {return false; }
        return true;
      case 'E':
        if (this.position[0] === 9) {return false; }
        return true;
      case 'S':
        if (this.position[1] === 9) {return false; }
        return true;
      case 'W':
        if (this.position[0] === 0) {return false; }
        return true;
    }

  },

  showPosition: function() {

    console.log("New Rover Position: [" + this.position[0] + ", " + this.position[1] + "]");

  }

};

function goRover(rover) {

  var movements = "fffrfflfffbb";
  rover.position = [5,5];

  for (var i = 0; i < movements.length ; i++) {

    switch(movements[i]) {
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

    rover.showPosition();

  }


}


goRover(myRover);
