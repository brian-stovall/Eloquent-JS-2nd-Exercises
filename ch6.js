// Your code here.
function Vector(x,y)
{
  this.x = x;
  this.y = y;
  this.plus = function(vec) 
  	{ return new Vector(this.x + vec.x, this.y + vec.y); };
  this.minus = function(vec) 
  	{ return new Vector(this.x - vec.x, this.y - vec.y); };
}

Object.defineProperty(Vector.prototype, "length", {
  get: function() 
  	{ return Math.pow(Math.pow(this.x,2) + Math.pow(this.y,2) , .5); }
});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5

//-------------------------------------------------------

// Your code here.
function StretchCell(inner, width, height)
{
  this.minWidth = function() 
  	{ return Math.max(width, inner.minWidth()) };
  this.minHeight = function() 
  	{ return Math.max(height, inner.minHeight()) };
  this.draw = function() 
  	{ return inner.draw(this.minWidth(), this.minHeight());};
}

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]

//-----------------------------------------------------------------
// Your code here.
// Interface for collection iteration:
// next() - gives next element in collection, or undefined if it has ended
// next() also resets the iterator when undefined is reached

function logFive(coll)
{
  for (i = 0; i < 5; i++)
  {
    curr = coll.next();
    if (curr) console.log(curr);
    else break;
  }
}

function ArraySeq(arr)
{
  var iter = 0;
  this.next = function()
  {
    var result = arr[iter];
    if  (result === undefined) iter = 0;
    iter ++;
    return result;
  }
}

function RangeSeq(begin, end)
{
  var iter = begin;
  this.next = function()
  {	
    	var result = (iter > end ? undefined: iter);
        iter++;
    	if (iter > end) 
      		iter = begin;
    	return result;
   }
}
    

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
