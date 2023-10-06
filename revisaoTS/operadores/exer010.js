var leitor = require('readline-sync');
var divida = parseFloat(leitor.question("Insira o valor da dívida: R$"));
var atraso = parseInt(leitor.question("Informe a quantos dias ela está atrasada: "));
var percentual = parseInt(leitor.question("Informe o percentual da multa (por dia): "));
var valor = divida + divida * atraso * percentual / 100;
console.log("Agora essa d\u00EDvida est\u00E1 valendo R$".concat(valor.toFixed(2)));
