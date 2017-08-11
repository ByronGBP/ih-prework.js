//    N
//    |
// W - - E
//    |
//    S


var myRover = {
  position: [0,0],
  oldPosition: {},
  direction: 'N',
  report: "",


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

    this.report = "directioned";
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

    this.report = "directioned";
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

  goNorth: function() {

    if (this.canMove("N")) {

      this.saveOldPosition();
      if (this.isOnTheEdge("N")) {this.position[0] = 9;}
      else{ this.position[0]--; }
      this.report = "moved";

    }
    else {

      this.report = "blocked";

    }
  },

  saveOldPosition: function() {

    this.oldPosition.x = this.position[0];
    this.oldPosition.y = this.position[1];

  },

  goEst: function() {

    if (this.canMove("E")) {
      this.saveOldPosition();
      if (this.isOnTheEdge("E")) {this.position[1] = 0;}
      else { this.position[1]++; }
      this.report = "moved";

    }

    else {

      this.report = "blocked";

    }
  },

  goSouth: function() {

    if (this.canMove("S")) {
      this.saveOldPosition();
      if (this.isOnTheEdge("S")) { this.position[0] = 0; }
      else{ this.position[0]++; }
      this.report = "moved";

    }

    else {

      this.report = "blocked";

    }

  },

  goWest: function() {

    if (canMove("W")) {
      this.saveOldPosition();
      if(this.isOnTheEdge("W")) { this.position[1] = 9;}
      else {this.position[1]--;}
      this.report = "moved";

    }
    else {

      this.report = "blocked";

    }
  },

  isOnTheEdge: function(toDirection){

    switch(toDirection) {
      case 'N':
        if (this.position[0] === 0) {return true; }
        return false;
      case 'E':
        if (this.position[1] === 9) {return true; }
        return false;
      case 'S':
        if (this.position[0] === 9) {return true; }
        return false;
      case 'W':
        if (this.position[1] === 0) {return true; }
        return false;
    }

  },

  canMove: function(toDirection) {

    var positionX = this.position[0];
    var positionY = this.position[1];
    switch(toDirection) {
      case 'N':
        if (this.isOnTheEdge('N')) {positionX = 10;}
        if (grid[--positionX][positionY] === "X" || this.bumpWithAnotherRover(positionX, positionY)) {return false; }
        return true;
      case 'E':
        if (this.isOnTheEdge('E')) {positionY = -1;}
        if (grid[positionX][++positionY] === "X" || this.bumpWithAnotherRover(positionX, positionY)) {return false; }
        return true;
      case 'S':
        if (this.isOnTheEdge('S')) {positionX = -1;}
        if (grid[++positionX][positionY] === "X" || this.bumpWithAnotherRover(positionX, positionY)) {return false; }
        return true;
      case 'W':
        if (this.isOnTheEdge('W')) {positionY = 10;}
        if (grid[positionX][--positionY] === "X" || this.bumpWithAnotherRover(positionX, positionY)) {return false; }
        return true;
    }
  },

  bumpWithAnotherRover: function(posX, posY) {

    if (posX === myRover2.position[0] && posY === myRover2.position[1]) { return true; }
    return false;

  },

  showReport: function() {

    switch(this.report) {
      case "directioned":
        console.log("New Rover Direction to: "+ this.direction + "; at Position: [" + this.position[0] + ", " + this.position[1] + "]");
        break;
      case "blocked":
        console.log("Rover Blocked at Position: [" + this.position[0] + ", " + this.position[1] + "]; with Direction: " + this.direction);
        break;
      case "moved":
        console.log("New Rover Position: [" + this.position[0] + ", " + this.position[1] + "]");
        break;
    }


  }

};
