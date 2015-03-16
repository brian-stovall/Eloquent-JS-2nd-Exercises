<canvas width="600" height="200"></canvas>
<script>
  var cx = document.querySelector("canvas").getContext("2d");
  function drawTrap(x,y, height, width, topWidth)
  {
    //draws a trap with top left point at x,y
    cx.beginPath();
    cx.moveTo(x,y);
    cx.lineTo(x + topWidth, y);
    cx.lineTo(x + topWidth + .5 * (width - topWidth), y + height);
    cx.lineTo(x - .5 * (width - topWidth), y + height);
    cx.closePath();
    cx.stroke();
  };
  
  function redDia(x,y, sideLength)
  {
    //draws red diamond with top point at x,y 
    cx.save();
    cx.translate(x + sideLength*.5,y + sideLength*.5);
    cx.rotate(Math.PI*.25);
    cx.translate(-(x + sideLength*.5),-(y + sideLength*.5));
    cx.fillStyle = 'red';
    cx.fillRect(x - sideLength * .2, y + sideLength * .5, sideLength, sideLength);
    cx.restore();
  };

  function vertZag(x,y, dx, dy, n)
  {
    //draws vertical zigzag with start at x, y and n zigzags 
    cx.beginPath();
    cx.moveTo(x,y);
    for (var i = 0; i < n; i++)
    {
      x = x + dx;
      y = y + dy;
      cx.lineTo(x,y);
      dx *= -1;
    };
    cx.stroke();
  };

  function crazySpiral(x, y, n, step, arcStep)
  {
    //draws a spiral made of n straight segments centered at x,y
    //segments length of step. arc change in radians = arcStep
    var step = step || .6;
    var arcStep = arcStep || .25;
    var angle = Math.PI/2;
    var radius = step;
    cx.beginPath();
    cx.save();
    cx.translate(x,y);
    for (var i = 0; i < n; i++)
    {
      cx.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
      angle += arcStep;
      radius += step;
    }
    cx.stroke();
    cx.restore();
  };

  function starburst(x, y, r, n, fillColor)
  {
    //draws an n-pointed starburst centered at x,y with radius r
    var fillColor = fillColor || 'orange';
    var arcStep = Math.PI * 2 / n;
    var angle = Math.PI/2;
    cx.beginPath();
    cx.save();
    cx.fillStyle = fillColor;
    cx.moveTo(x, y + r);
    cx.translate(x,y);
    for (var i = 0; i <= n; i++)
    {
      cx.quadraticCurveTo(0,0, Math.cos(angle) * r, Math.sin(angle) * r);
      //cx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
      angle += arcStep;
    }
    cx.fill();
    cx.restore();
  };

  redDia(225,90,50);
  drawTrap(100,100, 50, 75, 50);
  vertZag(290,100, 50, 5, 10);
  crazySpiral(400, 125, 100, .4);
  starburst(500,125, 50, 13);
  
</script>

//------------------------------------------------------------------------------------------------
<canvas width="600" height="300"></canvas>
<script>
  var cx = document.querySelector("canvas").getContext("2d");
  var total = results.reduce(function(sum, choice) {
    return sum + choice.count;
  }, 0);

  var currentAngle = -0.5 * Math.PI;
  var centerX = 300, centerY = 150;
  // Add code to draw the slice labels in this loop.
  results.forEach(function(result) {
    var sliceAngle = (result.count / total) * 2 * Math.PI;
    
    cx.beginPath();
    cx.arc(centerX, centerY, 100,
           currentAngle, currentAngle + sliceAngle);
    currentAngle += sliceAngle;
    cx.lineTo(centerX, centerY);
    cx.fillStyle = result.color;
    cx.fill();
    
    var middleAngle = currentAngle - 0.5 * sliceAngle;
    var textX = Math.cos(middleAngle) * 120 + centerX;
    var textY = Math.sin(middleAngle) * 120 + centerY;
    var align = 'right';
    if (textX > centerX) align = 'left';
    cx.textBaseline = 'middle';
    cx.textAlign = align;
    cx.fillText(result.name, textX, textY);
    
    
  });
</script>

//------------------------------------------------------------------------------------------
<canvas width="300" height="400"></canvas>
<script>
  var cn = document.querySelector("canvas");
  var cx = document.querySelector("canvas").getContext("2d");
  cx.fillStyle = 'black';
  cx.fillRect(0,0,cn.width ,cn.height);
  var ballX = cn.width / 2;
  var ballY = cn.height / 2;
  var ballRadius = 5; 
  var ballSpeed = 5; //ball speed in pixels per frame
  var ballVec = {x:-ballSpeed,y:-ballSpeed};
  var lastTime = null;
  
  function frame(time) {
    if (lastTime != null)
      updateAnimation(Math.min(100, time - lastTime) / 1000);
    lastTime = time;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  function drawBall(x,y)
  {
    cx.fillStyle = 'white';
    cx.beginPath();
    cx.moveTo(x,y);
    cx.arc(x, y, ballRadius, 0, 7);
    cx.fill();
  };
  
  function updateAnimation(step) {
    
    cx.fillStyle = 'black';
    cx.fillRect(ballX - ballRadius, ballY - ballRadius,
                 ballRadius*2, ballRadius*2);
    
    if (ballY >= cn.height + ballRadius || ballY <= 0 - ballRadius)
      ballVec.y *= -1;
    if (ballX >= cn.width + ballRadius || ballX <= 0 - ballRadius)
      ballVec.x *= -1;
    
    ballX += ballVec.x;   
    ballY += ballVec.y;
    
    
    drawBall(ballX, ballY);
    
     }
</script>
