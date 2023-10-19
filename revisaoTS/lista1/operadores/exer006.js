var leitor = require('readline-sync');
var dolar = parseFloat(leitor.question("Insira um valor em dólar: U$"));
var real = dolar * 5.47;
console.log("U$".concat(dolar.toFixed(2), " atualmente valem R$").concat(real.toFixed(2)));
