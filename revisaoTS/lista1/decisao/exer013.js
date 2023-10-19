var leitor = require('readline-sync');
var nome = leitor.question("Insira seu nome: ");
var sexo = leitor.question("Insira o sexo (F/M): ");
if (sexo == "F") {
    console.log("Seja bem-vinda, ".concat(nome, "!"));
}
else {
    if (sexo == "M") {
        console.log("Seja bem-vindo, ".concat(nome, "!"));
    }
}
