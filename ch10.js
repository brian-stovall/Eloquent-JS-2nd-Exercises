// Your code here.
var month = function() 
{
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                'August', 'September', 'October', 'November', 'December'];
  return {
    name : function(num) {return months[num];},
    number : function(mon) {return months.indexOf(mon);}
  };
}();

console.log(month.name(2));
// → March
console.log(month.number("November"));
// → 10

