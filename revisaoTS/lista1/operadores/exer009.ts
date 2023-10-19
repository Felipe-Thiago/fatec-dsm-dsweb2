const leitor = require('readline-sync');

let km0:number = parseInt(leitor.question("Informe o km inicial: "));

let kmf:number = parseInt(leitor.question("Informe o km final: "));

let litros:number = parseFloat(leitor.question("Informe os litros de combustível gastos: "));

let media:number = (kmf - km0)/litros;

console.log(`Média de gasto desse veículo: ${media}km/lt`);