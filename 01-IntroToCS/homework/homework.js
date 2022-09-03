'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
var a = num.toString();
var d = [];
var b = 0;
var c = [];
var e = [];
var f = 0;

for(var x in a){
  d.push(a[x])
}

var e = d.reverse();

for(var x of e) {
  c.push(x * Math.pow(2, b));
  b++
} 

for(x of c) {
  f = x + f
}
return f;
}

function DecimalABinario(num) {
  // tu codigo aca
var b = [];
var u = num;
do {
  var i = Math.floor(u % 2);
  b.push(i);
  var u = Math.floor(u / 2);
} while (u >= 1)

return b.reverse().join("")
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}