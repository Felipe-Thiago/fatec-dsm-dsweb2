var leitor = require('readline-sync');
var dia = "";
var dias = parseInt(leitor.question("Insira um número de 1 a 7: "));
switch (dias) {
    case 1:
        dia = "Domingo";
        break;
    case 2:
        dia = "Segunda-feira";
        break;
    case 3:
        dia = "Terça-feira";
        break;
    case 4:
        dia = "Quarta-feira";
        break;
    case 5:
        dia = "Quinta-feira";
        break;
    case 6:
        dia = "Sexta-feira";
        break;
    case 7:
        dia = "Sábado";
        break;
    default:
        console.log("Dia inexistente...");
}
if (dias >= 1 && dias <= 7) {
    console.log("Esse dia corresponde a ".concat(dia, "!"));
}
