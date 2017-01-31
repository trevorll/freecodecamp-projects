var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};

var Bike = function() {
  var gear;
  // Only change code below this line.
  this.setGear = function(gear) {
    this.gear = gear;
  };
  this.getGear = function() {
    return this.gear;
  };
};

var myCar = new Car();

var myBike = new Bike();