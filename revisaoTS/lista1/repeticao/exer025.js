var leitor = require('readline-sync');
var ano = parseInt(leitor.question("Insira um ano de nascimento: "));
var idade = 2023 - ano;
for (var i = 0; i <= idade; i++) {
    console.log("Ano = ".concat(ano + i, " | Idade = ").concat(i));
}
