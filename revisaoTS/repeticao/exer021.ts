const leitor = require('readline-sync');
let i = 0;
let soma = 0;
do{
    i++;
    let num = parseInt(leitor.question(`Insira o ${i}o numero: `));
    soma = soma + num;
    
} while (i < 10);

let media = soma/i;

console.log(`Média = ${media}`)