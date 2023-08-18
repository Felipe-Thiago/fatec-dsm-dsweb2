var readline = require('readline-sync');

let base:number = Number(readline.question("Insira um valor para a base: "))
let altura:number = Number(readline.question("Insira um valor para a altura: "))

let arearet:number = base*altura

console.log("A área do retângulo é de " + arearet + " m²")