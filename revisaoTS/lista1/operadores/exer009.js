var leitor = require('readline-sync');
var km0 = parseInt(leitor.question("Informe o km inicial: "));
var kmf = parseInt(leitor.question("Informe o km final: "));
var litros = parseFloat(leitor.question("Informe os litros de combustível gastos: "));
var media = (kmf - km0) / litros;
console.log("M\u00E9dia de gasto desse ve\u00EDculo: ".concat(media, "km/lt"));
