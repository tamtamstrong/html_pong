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
 this.tablewidth = tablewidth;
 this.tableheight = tableheight;
 this.batwidth = tablewidth / 20;
 this.batheight = tableheight / 20;
 this.ballradius = tablewidth / 30;
 this.speed = speed;

 this.bats = { 
  left: new Pong.Bat(0, 0, this.batwidth, this.batheight, this/speed),
  right: new Pong.Bat(this.tablewidth - this.batwidth, this.tableheight - this.batheight, this.batwidth, this.batheight, this.speed)
 }
 
 this.table = new Pong.Table(this.tablewidth, this.tableheight);
 
 this.ball = new Pong.Ball(this.tablewidth / 2, this.tableheight / 2, this.ballradius, this.speed);

}
