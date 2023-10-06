const leitor = require('readline-sync');

let nome:string = leitor.question('Insira seu nome: ');

console.log("Seu nome é: " + nome)