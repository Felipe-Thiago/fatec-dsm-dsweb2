var leitor = require('readline-sync');
var x = parseInt(leitor.question("Insira o valor de x: "));
var y = parseInt(leitor.question("Insira o valor de y: "));
var z = parseInt(leitor.question("Insira o valor de z: "));
if ((z > x && z < y) || (z > y && z < x)) {
    console.log("\u00C9, ".concat(z, " est\u00E1 entre ").concat(x, " e ").concat(y));
}
else {
    console.log("".concat(z, " n\u00E3o est\u00E1 entre ").concat(x, " e ").concat(y));
}
