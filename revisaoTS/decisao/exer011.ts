const leitor = require('readline-sync');

let x:number = parseInt(leitor.question("Insira o valor de x: "));
let y:number = parseInt(leitor.question("Insira o valor de y: "));

let z:number = parseInt(leitor.question("Insira o valor de z: "));

if((z > x && z < y) || (z > y && z < x)){
    console.log(`É, ${z} está entre ${x} e ${y}`);
} else{
    console.log(`${z} não está entre ${x} e ${y}`);
}