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

Pong.Ball = function(x, y, d, speed) {
 this.position = new Pong.Position(x, y);
 this.diameter = d;
 this.speed = speed;
 this.radius = d / 2;
}

Pong.Bat = function(x, y, width, height, speed) {
 this.position =  new Pong.Position(x, y);
 this.size = new Pong.SquareSize(width, height);
 this.speed = speed;
}

Pong.Game = function(tablewidth, tableheight, speed) {
  var self = this;
  self.tablewidth = tablewidth;
  self.tableheight = tableheight;
  self.batwidth = tablewidth / 40;
  self.batheight = tableheight / 6;
  self.balldiameter = tablewidth / 30;
  self.speed = speed;
  self.score = [0, 0];
  self.ballDirection = [0, 0]; // [x component, y component] of direction vector
  self.leftbatdirection = 0;
  self.rightbatdirection = 0;
  self.leftkeys = ['q', 'a'];
  self.rightkeys = ['p', 'l'];

  self.bats = { 
    left: new Pong.Bat(0, self.tableheight / 2 - self.batheight / 2, self.batwidth, self.batheight, self.speed),
    right: new Pong.Bat(self.tablewidth - self.batwidth, self.tableheight / 2 - self.batheight / 2, self.batwidth, self.batheight, self.speed)
  }
 
  self.table = new Pong.Table(self.tablewidth, self.tableheight);
 
  self.ball = new Pong.Ball(self.tablewidth / 2, self.tableheight / 2, self.balldiameter, self.speed);

  self.scoreChangeCallback;

  self.start = function() { 
    self.score = [0, 0];
    self.ballDirection = [1, 0];
  }

  self.play = function() {
    // move bats
    if (self.leftbatdirection == -1){
      self.bats.left.position.y -= self.bats.left.speed;
      if (self.bats.left.position.y < 0) {
        self.bats.left.position.y = 0;
      }
    }
    else if (self.leftbatdirection == 1){
      self.bats.left.position.y += self.bats.left.speed;
      if (self.bats.left.position.y > self.tableheight - self.bats.left.size.height) {
        self.bats.left.position.y = self.tableheight - self.bats.left.size.height;
      }
    }
    if (self.rightbatdirection == -1){
      self.bats.right.position.y -= self.bats.right.speed;
      if (self.bats.right.position.y < 0) {
        self.bats.right.position.y = 0;
      }
    }
    else if (self.rightbatdirection == 1){
      self.bats.right.position.y += self.bats.right.speed;
      if (self.bats.right.position.y > self.tableheight - self.bats.right.size.height) {
        self.bats.right.position.y = self.tableheight - self.bats.right.size.height;
      }
    }

    // move ball
    self.ball.position.x += (self.ballDirection[0] * self.ball.speed);
    self.ball.position.y += (self.ballDirection[1] * self.ball.speed);

    var ballRight = self.ball.position.x + self.ball.diameter;
    var ballBottom = self.ball.position.y + self.ball.diameter;
    var ballTop = self.ball.position.y;
    var ballLeft = self.ball.position.x;
    var rightBatLeft = self.bats.right.position.x;
    var rightBatBottom = self.bats.right.position.y + self.bats.right.size.height;
    var rightBatTop = self.bats.right.position.y;
    var leftBatTop = self.bats.left.position.y;
    var leftBatBottom = self.bats.left.position.y + self.bats.left.size.height;
    var leftBatRight = self.bats.left.position.x + self.bats.left.size.width;

    // ball + right bat
    if ( ballBottom > rightBatTop 
        && ballRight > rightBatLeft
        && ballTop  <= rightBatBottom ) {
      if (self.rightbatdirection == 1) {
        self.ballDirection[0] = -1;
        self.ballDirection[1] = -1;
      }
      else if (self.rightbatdirection == -1) {
        self.ballDirection[0] = -1;
        self.ballDirection[1] = 1;
      }
      else {
        self.ballDirection[0] *= -1;
        self.ballDirection[1] *= -1;
      }
    }

    // ball + left bat
    if ( ballBottom > leftBatTop
       && ballLeft < leftBatRight
       && ballTop <= leftBatBottom ) {
      if (self.leftbatdirection == 1) {
        self.ballDirection[0] = 1;
        self.ballDirection[1] = -1;
      }
      else if (self.leftbatdirection == -1) {
        self.ballDirection[0] = 1;
        self.ballDirection[1] = 1;
      }
      else {
        self.ballDirection[0] *= -1;
        self.ballDirection[1] *= -1;
      }
    }

    // ball + top and bottom
    if ( ballTop < 0 || ballBottom > self.tableheight ) {
        self.ballDirection[1] *= -1;
    }

    // goals
    if (ballLeft < 0) {
      console.log('point for right!');  
      self.bats.left.position.x = 0;
      self.bats.left.position.y = self.tableheight / 2 - self.batheight / 2;
      self.bats.right.position.x = self.tablewidth - self.batwidth;
      self.bats.right.position.y = self.tableheight / 2 - self.batheight / 2;
      self.ball.position.x = self.tablewidth / 2;
      self.ball.position.y = self.tableheight / 2;
      self.score[1]++;
      self.balldirection = [1, 0];
      self.scoreChangeCallback(self.score[0], self.score[1]);
    }
    if (ballRight > self.tablewidth) {
      console.log('point for left');
      self.bats.left.position.x = 0;
      self.bats.left.position.y = self.tableheight / 2 - self.batheight / 2;
      self.bats.right.position.x = self.tablewidth - self.batwidth;
      self.bats.right.position.y = self.tableheight / 2 - self.batheight / 2;
      self.ball.position.x = self.tablewidth / 2;
      self.ball.position.y = self.tableheight / 2;
      self.score[0]++;
      self.balldirection = [-1, 0];
      self.scoreChangeCallback(self.score[0], self.score[1]);
    } 
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
       break;
      case self.rightkeys[0]:
      case self.rightkeys[1]:
        self.rightbatdirection = 0; // right stop
       break;
   }
  }
}
