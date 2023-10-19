var leitor = require('readline-sync');
var i = 0;
var soma = 0;
do {
    i++;
    var num = parseInt(leitor.question("Insira o ".concat(i, "o numero: ")));
    soma = soma + num;
} while (i < 10);
var media = soma / i;
console.log("M\u00E9dia = ".concat(media));
