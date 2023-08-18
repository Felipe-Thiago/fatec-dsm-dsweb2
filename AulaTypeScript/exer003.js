var readline = require('readline-sync');
var aulahr = Number(readline.question("Insira o valor da hora-aula: "));
var naulas = Number(readline.question("Insira a quantidade de aulas dadas: "));
var desc = Number(readline.question("Insira a porcentagem do INSS: "));
var salliq = aulahr * naulas * desc / 100;
console.log("O valor do salário líquido é de: " + salliq);
