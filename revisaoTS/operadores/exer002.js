var leitor = require('readline-sync');
var nome = leitor.question("Insira seu nome: ");
var endereco = leitor.question("Insira seu endereco: ");
var idade = leitor.question("Insira sua idade: ");
console.log(nome + " mora no endereço: " + endereco + " e tem " + idade + " anos.");
