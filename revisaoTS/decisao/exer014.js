var leitor = require('readline-sync');
var clima = "";
var celsius = parseInt(leitor.question("Insira a temperatura atual (°C): "));
if (celsius <= 18) {
    clima = "Frio";
}
else if (celsius > 18 && celsius <= 23) {
    clima = "Agradável";
}
else if (celsius > 23 && celsius <= 35) {
    clima = "Quente";
}
else if (celsius > 35) {
    clima = "Muito Quente";
}
console.log("O clima atual \u00E9: ".concat(clima));
