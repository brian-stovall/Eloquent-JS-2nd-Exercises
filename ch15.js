<link rel="stylesheet" href="css/game.css">

<body>
  <div id = 'lifeMeter'>Lives: </div>
<script>
  // The old runGame function. Modify it...
  var lifeMeter = document.getElementById('lifeMeter');
  function runGame(plans, Display) {
    function startLevel(n, lives) {
      lifeMeter.textContent = "Lives: " + lives;
      runLevel(new Level(plans[n]), Display, function(status) {
        if (status == "lost")
        {
          if (--lives == 0) startLevel(0, 3);
          else startLevel(n, lives);
        }
        else if (n < plans.length - 1)
          startLevel(n + 1, lives);
        else
          console.log("You win!");
      });
    }
    startLevel(0, 3);
  }
  runGame(GAME_LEVELS, DOMDisplay);
</script>
</body>

//------------------------------------------------------------------
<link rel="stylesheet" href="css/game.css">

<body>
<script>
  // The old runLevel function. Modify this...
  function runLevel(level, Display, andThen) {
    var display = new Display(document.body, level);
    var paused = false;
    addEventListener('keypress', function(event)
    {
      if (String.fromCharCode(event.charCode).toUpperCase() == 'P')
      {
         paused = !paused; 
         runAnimation(go);
      }
    });
    
    var go = function(step) {
      if (paused == true) return false;
      level.animate(step, arrows);
      display.drawFrame(step);
      if (level.isFinished()) {
        display.clear();
        if (andThen)
          andThen(level.status);
        return false;
      }
    };
    
    runAnimation(go);
  }
  runGame(GAME_LEVELS, DOMDisplay);
</script>
</body>
