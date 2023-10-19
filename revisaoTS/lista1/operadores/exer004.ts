const leitor = require('readline-sync');

let num:number = parseInt(leitor.question("Insira um número inteiro: "));

let ant:number = num - 1;
let ant2:number = num - 2;
let ant3:number = num - 3;

console.log("Número: " + num);
console.log("Antecessores: " + ant + ", " + ant2 + ", " + ant3);
console.log(`Sucessores: ${num + 1}, ${num + 2}, ${num + 3}`);