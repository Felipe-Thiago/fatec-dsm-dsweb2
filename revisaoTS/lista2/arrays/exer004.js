var leitor = require('readline-sync');
var vetorN = [];
var vetorNinv = [];
for (var i = 0; i < 20; i++) {
    vetorN[i] = parseInt(leitor.question("Insira o ".concat(i + 1, "o numero: ")));
    vetorNinv.unshift(vetorN[i]);
}
console.log(vetorN);
console.log(vetorNinv);
