var leitor = require('readline-sync');
var aux = "";
var preco = 0;
var suite = "";
console.log("Bem vindo ao hotel");
console.log("==============================");
console.log("Possuímos as seguintes opções de quartos: ");
console.log("1. Suite");
console.log("2. Suite Master");
console.log("3. Suite Mega Blaster");
var tipo = parseInt(leitor.question("Insira opcao: "));
console.log("==============================");
console.log("A estadia será de algumas horas ou dias?");
console.log("1. Algumas horas");
console.log("2. Dias");
var calculo = parseInt(leitor.question("Insira opcao: "));
if (calculo == 1) {
    aux = "horas";
}
else if (calculo == 2) {
    aux = "dias";
}
console.log("==============================");
var qtd = parseInt(leitor.question("Insira a quantidade de ".concat(aux, ": ")));
console.log("==============================");
switch (tipo) {
    case 1:
        suite = "Suite";
        if (calculo == 1 && qtd <= 6) {
            preco = 30;
        }
        else if (calculo == 1 && qtd > 6) {
            preco = 60;
        }
        else if (calculo == 2) {
            preco = qtd * 60;
        }
        break;
    case 2:
        suite = "Suite Master";
        if (calculo == 1 && qtd <= 6) {
            preco = 50;
        }
        else if (calculo == 1 && qtd > 6) {
            preco = 90;
        }
        else if (calculo == 2) {
            preco = qtd * 90;
        }
        break;
    case 3:
        suite = "Suite Mega Blaster";
        if (calculo == 1 && qtd <= 6) {
            preco = 80;
        }
        else if (calculo == 1 && qtd > 6) {
            preco = 140;
        }
        else if (calculo == 2) {
            preco = qtd * 140;
        }
        break;
}
console.log("O pre\u00E7o por passar ".concat(qtd, " ").concat(aux, " na ").concat(suite, " \u00E9 de R$").concat(preco.toFixed(2)));
