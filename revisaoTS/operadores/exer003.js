var leitor = require('readline-sync');
var idade = leitor.question("Insira uma idade: ");
var dias = idade * 365;
console.log("Essa pessoa já viveu por pelo menos " + dias + " dias.");
