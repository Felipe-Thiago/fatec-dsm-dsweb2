var leitor = require('readline-sync');
var num = parseInt(leitor.question("Insira um número: "));
if (num % 2 == 0) {
    console.log("".concat(num, " \u00E9 par"));
}
else {
    console.log("".concat(num, " \u00E9 impar"));
}
