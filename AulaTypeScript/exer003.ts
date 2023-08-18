var readline = require('readline-sync');

let aulahr:number = Number(readline.question("Insira o valor da hora-aula: "))
let naulas:number = Number(readline.question("Insira a quantidade de aulas dadas: "))
let desc:number = Number(readline.question("Insira a porcentagem do INSS: "))

let salliq = aulahr * naulas * desc/100

console.log("O valor do salário líquido é de: " + salliq)
