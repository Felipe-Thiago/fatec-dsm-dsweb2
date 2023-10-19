const leitor = require('readline-sync');

let x:number = parseInt(leitor.question("Insira o valor de x: "));
let y:number = parseInt(leitor.question("Insira o valor de y: "));

let z:number = x;
x = y;
y = z;

console.log(`x agora vale ${x}`);
console.log(`y agora vale ${y}`);