// Modify these definitions...

topEnv["array"] = function()
{
  return(Array.prototype.slice.call(arguments));
};

topEnv["length"] = function(arr)
{
  return(arr.length);
};

topEnv["element"] = function(arr,idx)
{
  return(arr[idx]);
};

run("do(define(sum, fun(array,",
    "     do(define(i, 0),",
    "        define(sum, 0),",
    "        while(<(i, length(array)),",
    "          do(define(sum, +(sum, element(array, i))),",
    "             define(i, +(i, 1)))),",
    "        sum))),",
    "   print(sum(array(1, 2, 3))))");
// → 6


//-----------------------------------------------------------------
// This is the old skipSpace. Modify it...
function skipSpace(string) {
  var first = string.match(/(\s*#.*|\s)+/); 
  if (first == null) return string;
  return string.replace(first[0], '');
}

console.log(parse("# hello\nx"));
// → {type: "word", name: "x"}

console.log(parse("a # one\n   # two\n()"));
// → {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}



//--------------------------------------------------------------------
specialForms["set"] = function(args, env) {
  // Your code here.
  if (args.length != 2)
    throw new SyntaxError('Error: "set" takes 2 arguments but ' + args.length + ' were given.');
  var current = env;
  while (true)
  {
    if (Object.prototype.hasOwnProperty.call(current, args[0].name))
      return(current[args[0].name] = evaluate(args[1], env));
    else
      if (!(current = Object.getPrototypeOf(current) ))
        throw new ReferenceError('"' + args[0].name + '" not in scope.');
  }
};
  
run("do(define(x, 4),",
    "   define(setx, fun(val, set(x, val))),",
    "   setx(50),",
    "   print(x))");
// → 50
run("set(quux, true)");
// → Some kind of ReferenceError
