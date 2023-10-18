const leitor = require('readline-sync');
let i:number = 0;
let soma:number = 0;

while (i < 10){
    let num = parseInt(leitor.question(`Insira o ${i+1}o numero: `));
    soma = soma + num;
    i++;
}

console.log(`Soma = ${soma}`)