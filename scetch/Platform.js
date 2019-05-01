function Platform (x,y) {
  this.pos = {
    x: x,
    y: y
  }
  this.w = 100;
  this.h = 10;

  this.show = function() {
    stroke(240);
    fill(240);
    rect(this.pos.x, this.pos.y, this.w, this.h);
  }

  this.collide = function(p) { // p is an object with x and y value
    if (p.x > this.pos.x &&
      p.y > this.pos.y &&
      p.x < this.pos.x+this.w &&
      p.y < this.pos.y+this.h) {
        return true;
      }
      return false;
  }
}
