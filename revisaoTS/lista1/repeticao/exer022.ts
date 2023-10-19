const leitor = require('readline-sync');

let multi:number = 1;

for(let i = 1; i <= 10; i++){
    let num = parseInt(leitor.question(`Insira o ${i}o numero: `));

    multi = multi * num;
}

console.log(`Multiplicação = ${multi}`)