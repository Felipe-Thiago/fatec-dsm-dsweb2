var readline = require('readline-sync')

let salAtual = Number(readline.question("Insira o salário do funcionário: "))
let perReaj = Number(readline.question("Informe o percentual de reajuste: "))

let novoSal = salAtual + salAtual/100 * perReaj

console.log("O novo salário é de " + novoSal)