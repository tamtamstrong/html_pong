var Pong = Pong || {};

Pong.htmlRenderer = function(pongGame, window, container) {
  var self = this;

  self.pong = pongGame;
  self.container = container;
  
  self.container.css({"width": pongGame.tablewidth, "height": pongGame.tableheight, "position": "absolute", "background-color": "gray"});

  self.leftBat = $("<div></div>");
  self.leftBat.css({
      "width": pongGame.bats.left.size.width, 
      "height": pongGame.bats.left.size.height, 
      "top": pongGame.bats.left.position.y, 
      "left": pongGame.bats.left.position.x,
      "position": "absolute", 
      "background-color": "red", 
      "z-index": "1"});
  self.container.append(self.leftBat);
  
  self.rightBat = $("<div></div>");
  self.rightBat.css({
      "width": pongGame.bats.right.size.width,
      "height": pongGame.bats.right.size.height,
      "top": pongGame.bats.right.position.y,
      "left": pongGame.bats.right.position.x,
      "position": "absolute", 
      "background-color": "red", 
      "z-index": "2"});
  self.container.append(self.rightBat);

  self.ball = $("<div></div>");
  self.ball.css({
      "width": pongGame.ball.diameter, 
      "height": pongGame.ball.diameter, 
      "border-radius": "50%",
      "position": "absolute", 
      "z-index": "3", 
      "background-color": "white",
      "top": pongGame.ball.position.y, 
      "left": pongGame.ball.position.x });
  self.container.append(self.ball);

 self.render = function () {
    self.leftBat.css({
      "top": pongGame.bats.left.position.y,
      "left": pongGame.bats.left.position.x
    });
    self.rightBat.css({
      "top": pongGame.bats.right.position.y,
      "left": pongGame.bats.right.position.x        
    });
    self.ball.css({
      "top": pongGame.ball.position.y, 
      "left": pongGame.ball.position.x
    });
 };
}
