const leitor = require('readline-sync');

let valorcomb:number = parseFloat(leitor.question("Insira o valor do combustível: R$"));
let valordesejado:number = parseFloat(leitor.question("Qual o valor a ser abastecido? R$"));

let litros:number = valordesejado/valorcomb;

console.log(`Abastecendo R$${valordesejado.toFixed(2)} a R$${valorcomb.toFixed(2)}, você terá ${litros.toFixed(2)} litros.`);