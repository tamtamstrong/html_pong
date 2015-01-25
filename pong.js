var leftPlayer = { 
   upKey: 85,
   downKey: 74,
   bat : undefined
};

var rightPlayer = {
   upKey: 38,
   downKey: 40,
   bat : undefined
};

leftPlayer.bat = document.getElementById("leftPlayer");
rightPlayer.bat = document.getElementById("rightPlayer");

var handleKeyPress = function (args) {
   switch (args.keyCode) {
      case leftPlayer.upKey:
         leftPlayer.bat.style.top = 200;
         break;
      case leftPlayer.downKey:
         
         break;
      case rightPlayer.upKey:
      
         break;
      case rightPlayer.downKey:
      
         break;
   }   
}

document.addEventListener("keydown", handleKeyPress);
