// exer001
var readline = require('readline-sync')

let nome2:string = readline.question("Digite seu nome: ")
let endereco:string = readline.question("Digite seu endereço: ")
let telefone:number = Number(readline.question("Digite seu número de telefone: "))

console.log("Nome: " + nome2 + ".\nEndereço: " + endereco + ".\nTelefone: " + telefone)


