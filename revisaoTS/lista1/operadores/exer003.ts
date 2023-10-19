const leitor = require('readline-sync');

let idade:number = leitor.question("Insira uma idade: ");

let dias:number = idade * 365;

console.log("Essa pessoa já viveu por pelo menos " + dias + " dias.");
