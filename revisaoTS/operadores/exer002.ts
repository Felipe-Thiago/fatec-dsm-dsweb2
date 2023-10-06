const leitor = require('readline-sync');

let nome:string = leitor.question("Insira seu nome: ");
let endereco:string = leitor.question("Insira seu endereco: ");
let idade:number = leitor.question("Insira sua idade: ");

console.log(nome + " mora no endereço: " + endereco + " e tem " + idade + " anos.");