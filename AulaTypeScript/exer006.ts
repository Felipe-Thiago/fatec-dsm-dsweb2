var readline = require('readline-sync');

let valor3:number = Number(readline.question("Insira um valor: "))
let valor3ant:number = valor3 - 1

console.log("O antecessor de " + valor3 + " é de " + valor3ant)