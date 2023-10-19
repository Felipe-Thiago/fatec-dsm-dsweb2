var leitor = require('readline-sync');
var num = parseInt(leitor.question("Insira um número inteiro: "));
var ant = num - 1;
var ant2 = num - 2;
var ant3 = num - 3;
console.log("Número: " + num);
console.log("Antecessores: " + ant + ", " + ant2 + ", " + ant3);
console.log("Sucessores: ".concat(num + 1, ", ").concat(num + 2, ", ").concat(num + 3));
