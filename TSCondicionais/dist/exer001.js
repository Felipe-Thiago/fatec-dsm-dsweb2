"use strict";
const leitor2 = require('readline-sync');
let preco;
let qtdConsumida = Number(leitor2.question("Insira a quantidade de KWh consumida: "));
let tipoInst = leitor2.question(`Insira o tipo de Instalacao: \n R - Residencias; \n I - Industrias \n C - Comercios \n\n `);
switch (tipoInst) {
    case "R":
    case "r":
    case "Residencia":
    case "Residencias":
    case "Residência":
    case "Residências":
        if (qtdConsumida <= 500) {
            preco = 0.4;
        }
        else {
            preco = 0.65;
        }
        break;
    case "I":
    case "i":
    case "Industria":
    case "Industrias":
    case "Indústria":
    case "Indústrias":
        if (qtdConsumida <= 1000) {
            preco = 0.55;
        }
        else {
            preco = 0.6;
        }
        break;
    case "C":
    case "c":
    case "Comercial":
    case "Comercio":
    case "Comercio":
        if (qtdConsumida <= 5000) {
            preco = 0.55;
        }
        else {
            preco = 0.6;
        }
        break;
    default:
        preco = 0;
        break;
}
if (preco == 0) {
    console.log("Tipo de instalação inválido!");
}
else {
    console.log(`O preço pelo uso de ${qtdConsumida} KWh na instalação '${tipoInst}' é de R$${preco === null || preco === void 0 ? void 0 : preco.toFixed(2)}`);
}
//# sourceMappingURL=exer001.js.map