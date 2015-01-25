var leftPlayer = { 
   upKey: 85, // U
   downKey: 74, // J
   bat : undefined
};

var rightPlayer = {
   upKey: 38,	// arrow up
   downKey: 40,	// arrow down
   bat : undefined
};

leftPlayer.bat = document.getElementById("leftPlayer");
rightPlayer.bat = document.getElementById("rightPlayer");

var handleKeyDown = function (args) {
   switch (args.keyCode) {
      case leftPlayer.upKey:
         leftPlayer.bat.style.top = 200;
         break;
      case leftPlayer.downKey:
         leftPlayer.bat.style.top = 400;
         break;
      case rightPlayer.upKey:
      	rightPlayer.bat.style.top = 200;
         break;
      case rightPlayer.downKey:
      	rightPlayer.bat.style.top = 400;
         break;
   }   
}

document.addEventListener("keydown", handleKeyDown);
