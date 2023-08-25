var readline = require('readline-sync');
var salAtual = Number(readline.question("Insira o salário do funcionário: "));
var perReaj = Number(readline.question("Informe o percentual de reajuste: "));
var novoSal = salAtual + salAtual / 100 * perReaj;
console.log("O novo salário é de " + novoSal);
