var Pong = Pong || {};

Pong.htmlRenderer = function(pongGame, window, container) {
  var self = this;

  self.pong = pongGame;
  self.container = container;
  
  self.container.css({"width": pongGame.tablewidth, "height": pongGame.tableheight, "position": "absolute", "background-color": "gray"});

  self.leftBat = $("<div></div>");
  self.leftBat.css({"width": pongGame.batwidth, "height": pongGame.batheight, 
      "top": pongGame.tableheight / 2 - pongGame.batheight / 2, "left": 0,
      "position": "absolute", "background-color": "red", "z-index": "1"});
  self.container.append(self.leftBat);
  
  self.rightBat = $("<div></div>");
  self.rightBat.css("width", self.leftBat.css("width"));
  self.rightBat.css("height", self.leftBat.css("height"));
  self.rightBat.css("top", self.leftBat.css("top"));
  self.rightBat.css({"left": pongGame.tablewidth - pongGame.batwidth,
      "position": "absolute", "background-color": "red", "z-index": "2"});
  self.container.append(self.rightBat);

  self.ball = $("<div></div>");
  self.ball.css({"width": pongGame.balldiameter, "height": pongGame.balldiameter, "border-radius": "50%",
      "position": "absolute", "z-index": "3", "background-color": "white",
      "top": pongGame.tableheight / 2 - pongGame.balldiameter / 2, 
      "left": pongGame.tablewidth / 2 - pongGame.balldiameter / 2 });
  self.container.append(self.ball);

 self.render = function () {
   console.log(self);
    // render the table
    // render the bats
    // render the ball
 };
}
