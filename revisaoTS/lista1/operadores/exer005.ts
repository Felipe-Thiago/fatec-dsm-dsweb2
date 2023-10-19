const leitor = require('readline-sync');

let sal:number = parseFloat(leitor.question("Insira o salário: R$"));
let perc:number = parseInt(leitor.question("Insira um percentual de reajuste (%): "));

let nsal:number = sal + sal*(perc/100);

console.log(`O valor do novo salário é de R$${nsal}`)