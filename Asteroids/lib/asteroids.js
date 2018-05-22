//Inherits from MovingObject
// console.log(`Workinb!!!!!!!!!`);

const MovingObject = require('./moving_object.js');
const Util = require('./utils.js');
const Game = require('./game.js');


function Asteroid(options) {
  options.color = "red";
  options.radius = 25;
  // options.vel = Util.randomVec(Util.dist(options.pos));
  options.vel = Util.randomVec(10);
  MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);


let game = new Game();
game.addAsteroids(Asteroid);

module.exports = Asteroid;


//
// const mo = new Asteroid(
//   { pos: [30, 30], vel: [10, 10], radius: 15, color: "#aadF90"}
// );
//
// window.mo = mo;
// window.as = Asteroid;
// console.log(`${Asteroid.prototype.__proto__}`)

document.addEventListener("DOMContentLoaded", function(){
  const can = document.getElementById("game-canvas");
  can.width = 1200;
  can.height = 750;

  const ctx = can.getContext("2d");
  window.setInterval( () => {
    game.draw(ctx);
    game.move();
  }, 10);

});
