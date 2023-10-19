var leitor = require('readline-sync');
var midade = 100;
var pessoa = "";
for (var i = 0; i < 10; i++) {
    var nome = leitor.question("Insira o nome da ".concat(i + 1, "a pessoa: "));
    var idade = parseInt(leitor.question("Insira a idade da ".concat(i + 1, "a pessoa: ")));
    if (idade < midade) {
        midade = idade;
        pessoa = nome;
    }
}
console.log("A pessoa mais nova \u00E9 ".concat(pessoa, ", com ").concat(midade, " anos!"));
