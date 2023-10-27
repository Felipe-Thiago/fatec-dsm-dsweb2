const leitor = require('readline-sync');

let vetorN: number[] = [];
let vetorNinv: number[] = [];

for (let i = 0; i < 20; i++){
    vetorN[i] =  parseInt(leitor.question(`Insira o ${i+1}o numero: `));
    vetorNinv.unshift(vetorN[i]);
}
console.log(vetorN);
console.log(vetorNinv);