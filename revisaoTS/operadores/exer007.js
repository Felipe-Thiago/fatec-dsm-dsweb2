var leitor = require('readline-sync');
var x = parseInt(leitor.question("Insira o valor de x: "));
var y = parseInt(leitor.question("Insira o valor de y: "));
var z = x;
x = y;
y = z;
console.log("x agora vale ".concat(x));
console.log("y agora vale ".concat(y));
