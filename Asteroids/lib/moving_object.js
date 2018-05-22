
function MovingObject(options){
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  if(this.pos[0] > 1200 + this.radius) this.pos[0] = 0;
  if(this.pos[1] > 750 + this.radius) this.pos[1] = 0;
  if(this.pos[0] < 0 - this.radius) this.pos[0] = 1200;
  if(this.pos[1] < 0 - this.radius) this.pos[1] = 750;
};



MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);
  ctx.strokeStyle = this.color;
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
};
// MovingObject.prototype.isCollidedWith(otherMovingObject)

module.exports = MovingObject;
