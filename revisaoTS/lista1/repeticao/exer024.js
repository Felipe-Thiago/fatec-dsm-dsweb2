var leitor = require('readline-sync');
var impares = "";
var num = parseInt(leitor.question("Insira um número inteiro: "));
var i = 0;
while (i < num) {
    if (i % 2 == 1) {
        impares = impares + i + ", ";
    }
    i++;
}
console.log("N\u00FAmeros \u00EDmpares: ".concat(impares));
