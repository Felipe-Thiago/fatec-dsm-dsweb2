var leitor = require('readline-sync');
var i = 0;
var soma = 0;
while (i < 10) {
    var num = parseInt(leitor.question("Insira o ".concat(i + 1, "o numero: ")));
    soma = soma + num;
    i++;
}
console.log("Soma = ".concat(soma));
