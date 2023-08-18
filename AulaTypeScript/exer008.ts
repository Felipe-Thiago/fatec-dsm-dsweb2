var readline = require('readline-sync');


console.log("Insira uma idade (anos, meses e dias):")
let idade_anos: number = Number(readline.question("anos: "))
let idade_meses: number = Number(readline.question("meses: "))
let idade_dias: number = Number(readline.question("dias: "))

let idade_diastot: number = idade_anos * 365 + idade_meses * 30 + idade_dias

console.log("Essa idade é igual a " + idade_diastot + " dias no total.")