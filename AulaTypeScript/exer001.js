// exer001
var readline = require('readline-sync');
var nome2 = readline.question("Digite seu nome: ");
var endereco = readline.question("Digite seu endereço: ");
var telefone = Number(readline.question("Digite seu número de telefone: "));
console.log("Nome: " + nome2 + ".\nEndereço: " + endereco + ".\nTelefone: " + telefone);
