/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/asteroids.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/asteroids.js":
/*!**************************!*\
  !*** ./lib/asteroids.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//Inherits from MovingObject\n// console.log(`Workinb!!!!!!!!!`);\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./lib/utils.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./lib/game.js\");\n\n\nfunction Asteroid(options) {\n  options.color = \"red\";\n  options.radius = 25;\n  // options.vel = Util.randomVec(Util.dist(options.pos));\n  options.vel = Util.randomVec(10);\n  MovingObject.call(this, options);\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\n\nlet game = new Game();\ngame.addAsteroids(Asteroid);\n\nmodule.exports = Asteroid;\n\n\n//\n// const mo = new Asteroid(\n//   { pos: [30, 30], vel: [10, 10], radius: 15, color: \"#aadF90\"}\n// );\n//\n// window.mo = mo;\n// window.as = Asteroid;\n// console.log(`${Asteroid.prototype.__proto__}`)\n\ndocument.addEventListener(\"DOMContentLoaded\", function(){\n  const can = document.getElementById(\"game-canvas\");\n  can.width = 1200;\n  can.height = 750;\n\n  const ctx = can.getContext(\"2d\");\n  window.setInterval( () => {\n    game.draw(ctx);\n    game.move();\n  }, 10);\n\n});\n\n\n//# sourceURL=webpack:///./lib/asteroids.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Holds collections of the asteroids, bullets, and your ship.\n// Game.prototype.step method calls Game.prototype.move on all the objects,\n// and Game.prototype.checkCollisions checks for colliding objects.\n// Game.prototype.draw(ctx) draws the game.\n// Keeps track of dimensions of the space; wraps objects around when\n// they drift off the screen.\n// const Asteroid = require('./asteroids.js');\n\nfunction Game() {\n  this.DIM_X = 1200;\n  this.DIM_Y = 750;\n  this.NUM_ASTEROIDS = 15;\n  this.asteroids = [];\n}\n\nGame.prototype.addAsteroids = function(Asteroid) {\n  for (var i = 0; i < this.NUM_ASTEROIDS; i++) {\n    let x = this.randomPos(this.DIM_X);\n    let y = this.randomPos(this.DIM_Y);\n    let asteroid = new Asteroid({ pos: [x, y]});\n    this.asteroids.push(asteroid);\n  }\n};\n\nGame.prototype.randomPos = function(max) {\n  return Math.floor(Math.random() * Math.floor(max));\n};\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0,0, this.DIM_X, this.DIM_Y);\n  this.asteroids.forEach((el) => el.draw(ctx));\n};\n\nGame.prototype.move = function() {\n  this.asteroids.forEach(el => el.move());\n};\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/moving_object.js":
/*!******************************!*\
  !*** ./lib/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nfunction MovingObject(options){\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n}\n\nMovingObject.prototype.move = function() {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n  if(this.pos[0] > 1200 + this.radius) this.pos[0] = 0;\n  if(this.pos[1] > 750 + this.radius) this.pos[1] = 0;\n  if(this.pos[0] < 0 - this.radius) this.pos[0] = 1200;\n  if(this.pos[1] < 0 - this.radius) this.pos[1] = 750;\n};\n\n\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);\n  ctx.strokeStyle = this.color;\n  ctx.stroke();\n  ctx.fillStyle = this.color;\n  ctx.fill();\n};\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./lib/moving_object.js?");

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    childClass.prototype = Object.create(parentClass.prototype);\n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  },\n\n  dist(pos) {\n    return Math.sqrt(Math.pow(pos[0], 2) + Math.pow(pos[1],2));\n  }\n};\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./lib/utils.js?");

/***/ })

/******/ });