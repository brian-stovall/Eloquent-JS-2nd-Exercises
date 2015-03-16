<style>
  /* Defines a cleaner look for tables */
  table  { border-collapse: collapse; }
  td, th { border: 1px solid black; padding: 3px 8px; }
  th     { text-align: left; }
  .numbr { text-align: right; }
</style>

<script>
  //this needs refactoring for DRY?
  function buildTable(data) 
  { 
    var tab = document.createElement('table');
    //first make heading row
    var headRow = document.createElement('tr')
    Object.keys(data[0]).forEach(function(heading)
        {
          var head = document.createElement('th');
          var content = document.createTextNode(heading);
          head.appendChild(content);
          headRow.appendChild(head);
        });
    tab.appendChild(headRow);
    
    //now make entries
    data.forEach(function(elem) 
           { 
             var row = document.createElement('tr');
             Object.keys(data[0]).forEach(function(heading)
             {
               var entry = document.createElement('td');
               var content = document.createTextNode(elem[heading]);
               if (heading == 'height')                                                 
                 entry.className = 'numbr'; // used to right-align in CSS
    	       entry.appendChild(content);
               row.appendChild(entry);
             });
             tab.appendChild(row);
           }); 
    return tab;
  }
  
  document.body.appendChild(buildTable(MOUNTAINS));
</script>

//-------------------------------------------------------------------
<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script>
  function byTagName(node, tagName) {
    var result = [];
    function inner(node, tagName)
    {
      for (var elem in node.childNodes) {
        elem = node.childNodes[elem];
        if (elem.nodeType == document.ELEMENT_NODE && elem.tagName.toLowerCase() == tagName) 
        	  result.push(elem);      	  
        inner(elem, tagName);
      };
    }
    inner(node, tagName);
    return result;
  }

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  var para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
</script>

//-------------------------------------------------------------------------
<img src="img/cat.png" id="cat" style="position: absolute">
<img src="img/hat.png" id="hat" style="position: absolute">

<script>
  var cat = document.querySelector("#cat");
  var hat = document.querySelector("#hat");
  // Your code here.
    var angle = 0, lastTime = null; offset = 50;
  function animate(time) {
    if (lastTime != null)
      angle += (time - lastTime) * 0.001;
    lastTime = time;
    cat.style.top = (Math.sin(angle) * 15) + "px";
    cat.style.left = (Math.cos(angle) * 200) + offset + "px";
    hat.style.top = -5 + cat.style.top;
    hat.style.left = cat.style.left;
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
</script>
</script>
