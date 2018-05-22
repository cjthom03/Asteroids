// Function.prototype.inherits = function(parent) {
//   function Surrogate () {}
//   Surrogate.prototype = parent.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };

Function.prototype.inherits = function(parent) {
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};



function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);
Asteroid.prototype.test = function() {console.log(`I am asteroid`);};
MovingObject.prototype.test = function() {console.log(`I am object`);};
