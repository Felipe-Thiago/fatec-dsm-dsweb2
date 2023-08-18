var readline = require('readline-sync');
console.log("Insira uma idade (anos, meses e dias):");
var idade_anos = Number(readline.question("anos: "));
var idade_meses = Number(readline.question("meses: "));
var idade_dias = Number(readline.question("dias: "));
var idade_diastot = idade_anos * 365 + idade_meses * 30 + idade_dias;
console.log("Essa idade é igual a " + idade_diastot + " dias no total.");
