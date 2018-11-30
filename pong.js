var Pong = Pong || {};

Pong.SquareSize = function(width, height) {
 this.width = width,
 this.height = height
}

Pong.Table = function(width, height) {
 this.size = new Pong.SquareSize(width, height);
}

Pong.Position = function(x, y) {
 this.x = x;
 this.y = y;
}

Pong.Ball = function(x, y, r, speed) {
 this.position = new Pong.Position(x, y);
 this.radius = r;
 this.speed = speed;
}

Pong.Bat = function(x, y, width, height, speed) {
 this.Position =  new Pong.Position(x, y);
 this.Size = new Pong.SquareSize(width, height);
 this.speed = speed;
}

Pong.Game = function(tablewidth, tableheight, speed) {
  var self = this;
  self.tablewidth = tablewidth;
  self.tableheight = tableheight;
  self.batwidth = tablewidth / 40;
  self.batheight = tableheight / 4;
  self.balldiameter = tablewidth / 30;
  self.speed = speed;
  self.score = [0, 0];
  self.ballDirection = [0, 0]; // [x component, y component] of direction vector
  self.leftbatdirection = 0;
  self.rightbatdirection = 0;
  self.leftkeys = ['q', 'a'];
  self.rightkeys = ['p', 'l'];

  self.bats = { 
    left: new Pong.Bat(0, 0, self.batwidth, self.batheight, self.speed),
    right: new Pong.Bat(self.tablewidth - self.batwidth, self.tableheight - self.batheight, self.batwidth, self.batheight, self.speed)
  }
 
  self.table = new Pong.Table(self.tablewidth, self.tableheight);
 
  self.ball = new Pong.Ball(self.tablewidth / 2, self.tableheight / 2, self.ballradius, self.speed);

  self.start = function() { 
    self.score = [0, 0];
    self.ballDirection = [1, 0];
  }

  self.play = function() {
    // move bats
    if (self.leftbatdirection = -1){
      self.bats.left.Position.y -= self.bats.left.speed;
    }
   // move ball
   // check for goal    
  }

  self.keyDown = function(evt) {
   switch(evt.key) {
      case self.leftkeys[0]: 
        self.leftbatdirection = -1; // left up
       break;
      case self.leftkeys[1]:
        self.leftbatdirection = 1; // left down
       break;
      case self.rightkeys[0]:
        self.rightbatdirection = -1; // right up
       break;
      case self.rightkeys[1]:
        self.rightbatdirection = 1; // right down
       break;
   }
  }

  self.keyUp = function(evt) {
   switch(evt.key) {
      case self.leftkeys[0]: 
      case self.leftkeys[1]:
        self.leftbatdirection = 0; // left stop
        console.log('left stop');
       break;
      case self.rightkeys[0]:
      case self.rightkeys[1]:
        self.rightbatdirection = 0; // right stop
        console.log('right stop');
       break;
   }
  }
}
