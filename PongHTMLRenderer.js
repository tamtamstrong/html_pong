var Pong = Pong || {};

Pong.htmlRenderer = function(pongGame, window, container) {
  
  this.pong = pongGame;
  this.container = container;
  
  this.container.css({"width": pongGame.tablewidth, "height": pongGame.tableheight, "position": "absolute"});
    

 this.render = function () {
    // render the table
    // render the bats
    // render the ball
 };
}
