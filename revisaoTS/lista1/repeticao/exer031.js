var leitor = require('readline-sync');
var num = parseInt(leitor.question("Insira um número: "));
var msg = "";
for (var i = 0; i < num; i++) {
    msg = msg + "* ";
}
console.log(msg);
