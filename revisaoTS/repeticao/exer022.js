var leitor = require('readline-sync');
var multi = 1;
for (var i = 1; i <= 10; i++) {
    var num = parseInt(leitor.question("Insira o ".concat(i, "o numero: ")));
    multi = multi * num;
}
console.log("Multiplica\u00E7\u00E3o = ".concat(multi));
