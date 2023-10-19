const leitor = require('readline-sync');

let dolar:number = parseFloat(leitor.question("Insira um valor em dólar: U$"));

let real:number = dolar * 5.47;

console.log(`U$${dolar.toFixed(2)} atualmente valem R$${real.toFixed(2)}`);
