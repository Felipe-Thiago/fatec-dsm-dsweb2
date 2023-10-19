const leitor = require('readline-sync');

let divida:number = parseFloat(leitor.question("Insira o valor da dívida: R$"));

let atraso:number = parseInt(leitor.question("Informe a quantos dias ela está atrasada: "));

let percentual:number = parseInt(leitor.question("Informe o percentual da multa (por dia): "));

let valor:number = divida + divida * atraso * percentual/100;

console.log(`Agora essa dívida está valendo R$${valor.toFixed(2)}`);

