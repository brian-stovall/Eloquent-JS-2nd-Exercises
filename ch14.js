<input type="text">
<script>
  var banned = {'W' : true, 'Q' : true, 'X' : true};
  var field = document.querySelector("input");
  // Your code here
  field.addEventListener('keypress', function(event)
    {
     if (banned[String.fromCharCode(event.charCode).toUpperCase()]) event.preventDefault();
    });
</script>

//--------------------------------------------------------------------

<style>
  .trail { /* className for the trail elements */
    position: absolute;
    height: 6px; width: 6px;
    border-radius: 3px;
    background: teal;
  }
  body {
    height: 300px;
  }
</style>

<script>
  var backgrounds = ['red', 'aqua', 'teal', 'navy','green', 'lime', 'yellow']
  var dots = []; //array of our trail elements
  var dotIter = 0; //keeps track of which dot to place next
  var trailNum = 15; //how many dots in trail
  
  for (var i = 0; i < trailNum; i++)  {
 	dots[i] = document.createElement("div");
    dots[i].className = "trail";
   	dots[i].style.display = 'none';
    dots[i].style.background = backgrounds[i % backgrounds.length];
    document.body.appendChild(dots[i]);
  }
  
  addEventListener('mousemove', function(event) 
  {
    dots[dotIter].style.display = 'inline';
  	dots[dotIter].style.left = (event.pageX) + "px";
  	dots[dotIter].style.top = (event.pageY) + "px";
    dotIter++;
    if (dotIter === trailNum) dotIter = 0;
  });
    
  // Your code here.
</script>

//-------------------------------------------------------------
<div id="wrapper">
  <div data-tabname="one">Tab one</div>
  <div data-tabname="two">Tab two</div>
  <div data-tabname="three">Tab three</div>
</div>
<script>
  function asTabs(node) {
    // Your code here.
    var buttons = [];
    var basestyle = document.createElement('button').style;
    //console.log(node.childNodes.length);
    for (var i = 0; i < node.childNodes.length; i++)
    	if (node.childNodes[i].nodeType == 1)
    	{
      	  buttons[i] = document.createElement('button');
      	  buttons[i].textContent = node.childNodes[i].textContent;
          buttons[i].myNode = node.childNodes[i];
          buttons[i].addEventListener('click', function(event)
             {
               for (var i in buttons) 
               {
                 buttons[i].myNode.style.display = 'none';
                 buttons[i].style = basestyle;
               };
               this.myNode.style.display = 'block';
               this.style["color"] = 'green';
             });
    	};
    var beginning = node.firstChild; 
    //because if i use node.firstChild directly, buttons are backwards
    for (var i in buttons)
      node.insertBefore(buttons[i], beginning );
    node.firstChild.click();
  }
  asTabs(document.querySelector("#wrapper"));
</script>
