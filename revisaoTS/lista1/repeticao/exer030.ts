const leitor = require('readline-sync');

let qtdturmas:number = parseInt(leitor.question("Insira a quantidade de turmas: "));
let mediaturma:number = 0;

for (let i=0; i < qtdturmas; i++){
    let qtdalunos:number = parseInt(leitor.question(`Qtd de alunos da turma ${i+1}: `));
    let media = 0;
    for (let j=0; j < qtdalunos; j++){
        let aux = parseInt(leitor.question(`Nota no semestre do aluno ${j+1}: `));
        media = media + aux;
    }
    mediaturma = media/qtdalunos;
    console.log(`Média de notas da turma ${i+1}: ${mediaturma.toFixed(2)}`)
}