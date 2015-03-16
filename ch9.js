// Fill in the regular expressions

verify(/ca[rt]/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/pr?op/,
       ["pop culture", "mad props"],
       ["plop"]);

verify(/ferr[(et)y(ari)]/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/\b\w+(ious)\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\s[.,;:]/,
       ["bad punctuation ."],
       ["escape the dot"]);

verify(/\w{7,}/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

verify(/\b[^eE\W]+\b/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...")
  {
    console.log('ignoring');
    return;
  }
  yes.forEach(function(s) {
    if (!regexp.test(s))
      console.log("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log("Unexpected match for '" + s + "'");
  });
}

//-------------------------------------------------------------
var text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/(\s)'|'(\s)|'$|^'/g, "$1\"$2"));
// → "I'm the cook," he said, "it's my job."

//-------------------------------------------------------------
// Fill in this regular expression.
var number = /^(\+|-|)(\d+\.?\d*|\.\d+)(e(\+|-|)\d+)?$/i;

// Tests:
["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
 "1e+12"].forEach(function(s) {
  if (!number.test(s))
    console.log("Failed to match '" + s + "'");
});
["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
 "."].forEach(function(s) {
  if (number.test(s))
    console.log("Incorrectly accepted '" + s + "'");
});
