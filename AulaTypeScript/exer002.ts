// exer002
var readline = require('readline-sync');

let valor:number = Number(readline.question("Insira um valor: "));
let valor2 = valor * 0.1;
console.log("10% de " + valor + " é igual a " + valor2)