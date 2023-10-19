var leitor = require('readline-sync');
var qtdturmas = parseInt(leitor.question("Insira a quantidade de turmas: "));
var mediaturma = 0;
for (var i = 0; i < qtdturmas; i++) {
    var qtdalunos = parseInt(leitor.question("Qtd de alunos da turma ".concat(i + 1, ": ")));
    var media = 0;
    for (var j = 0; j < qtdalunos; j++) {
        var aux = parseInt(leitor.question("Nota no semestre do aluno ".concat(j + 1, ": ")));
        media = media + aux;
    }
    mediaturma = media / qtdalunos;
    console.log("M\u00E9dia de notas da turma ".concat(i + 1, ": ").concat(mediaturma.toFixed(2)));
}
