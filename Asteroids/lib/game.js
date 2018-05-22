// Holds collections of the asteroids, bullets, and your ship.
// Game.prototype.step method calls Game.prototype.move on all the objects,
// and Game.prototype.checkCollisions checks for colliding objects.
// Game.prototype.draw(ctx) draws the game.
// Keeps track of dimensions of the space; wraps objects around when
// they drift off the screen.
// const Asteroid = require('./asteroids.js');

function Game() {
  this.DIM_X = 1200;
  this.DIM_Y = 750;
  this.NUM_ASTEROIDS = 15;
  this.asteroids = [];
}

Game.prototype.addAsteroids = function(Asteroid) {
  for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
    let x = this.randomPos(this.DIM_X);
    let y = this.randomPos(this.DIM_Y);
    let asteroid = new Asteroid({ pos: [x, y]});
    this.asteroids.push(asteroid);
  }
};

Game.prototype.randomPos = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0,0, this.DIM_X, this.DIM_Y);
  this.asteroids.forEach((el) => el.draw(ctx));
};

Game.prototype.move = function() {
  this.asteroids.forEach(el => el.move());
};

module.exports = Game;
