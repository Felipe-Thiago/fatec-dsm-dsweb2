var leitor = require('readline-sync');
var valorcomb = parseFloat(leitor.question("Insira o valor do combustível: R$"));
var valordesejado = parseFloat(leitor.question("Qual o valor a ser abastecido? R$"));
var litros = valordesejado / valorcomb;
console.log("Abastecendo R$".concat(valordesejado.toFixed(2), " a R$").concat(valorcomb.toFixed(2), ", voc\u00EA ter\u00E1 ").concat(litros.toFixed(2), " litros."));
