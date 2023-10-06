var leitor = require('readline-sync');
var sal = parseFloat(leitor.question("Insira o salário: R$"));
var perc = parseInt(leitor.question("Insira um percentual de reajuste (%): "));
var nsal = sal + sal * (perc / 100);
console.log("O valor do novo sal\u00E1rio \u00E9 de R$".concat(nsal));
