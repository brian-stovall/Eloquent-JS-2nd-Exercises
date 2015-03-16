function MultiplicatorUnitFailure(message) 
{
  this.message = message;
  this.stack = (new Error()).stack;
}
MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.prototype.name = "MultError";

function primitiveMultiply(a, b) {
  console.log('multiplying ', a, ' * ', b);
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  // Your code here.
  try { return primitiveMultiply(a,b); }
  catch (err)
  {
    console.log('Error: ', err)
    if (err instanceof MultiplicatorUnitFailure) return reliableMultiply(a,b);
    throw err;
  }
}

console.log(reliableMultiply(8, 8));
// → 64

//--------------------------------------------------------------------
function withBoxUnlocked(body) {
  // Your code here.
  function boxToggle()
  {
    if (box.locked) box.unlock();
    else box.lock();
  }
  
  var initState = box.locked;
  if (initState) boxToggle();
  
  try
  {
    body();
  }
  finally
  {
    console.log('initial state, locked?', initState)
    if (box.locked !== initState) boxToggle();
  }
}

box.lock();

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);
// → true
