var readline = require('readline-sync');
var base = Number(readline.question("Insira um valor para a base: "));
var altura = Number(readline.question("Insira um valor para a altura: "));
var arearet = base * altura;
console.log("A área do retângulo é de " + arearet + " m²");
