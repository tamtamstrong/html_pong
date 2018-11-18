var Pong = Pong || {};

Pong.htmlRenderer = function(pongGame, window, container) {
  
  this.pong = pongGame;
  this.container = container;
  
  this.container.css({"width": pongGame.tablewidth, "height": pongGame.tableheight, "position": "absolute", "background-color": "gray"});

  this.leftBat = $("<div></div>");
  this.leftBat.css({"width": pongGame.batwidth, "height": pongGame.batheight, 
      "top": pongGame.tableheight / 2 - pongGame.batheight / 2, "left": 0,
      "position": "absolute", "background-color": "red", "z-index": "1"});
  this.container.append(this.leftBat);
  
  this.rightBat = $("<div></div>");
  this.rightBat.css("width", this.leftBat.css("width"));
  this.rightBat.css("height", this.leftBat.css("height"));
  this.rightBat.css("top", this.leftBat.css("top"));
  this.rightBat.css({"left": pongGame.tablewidth - pongGame.batwidth,
      "position": "absolute", "background-color": "red", "z-index": "2"});
  this.container.append(this.rightBat);

 this.render = function () {
    // render the table
    // render the bats
    // render the ball
 };
}
