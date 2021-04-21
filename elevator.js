class Button {
  constructor(floor) {
    this.floorNum = floor;
  }
  requestFloor() {
    // put this.floorNum into priority queue for the correct elevator.
  }
}

class Elevator {
  constructor() {
    this.direction = 'up';
    this.queue = [];
    this.currentWeight = 4;
  }
}
