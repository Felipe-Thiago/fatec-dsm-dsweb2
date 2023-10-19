const leitor = require('readline-sync');


let midade = 100;
let pessoa = "";

for(let i = 0; i < 10; i++){
    let nome = leitor.question(`Insira o nome da ${i+1}a pessoa: `);
    let idade = parseInt(leitor.question(`Insira a idade da ${i+1}a pessoa: `));

    if (idade < midade){
        midade = idade;
        pessoa = nome;
    }
}

console.log(`A pessoa mais nova é ${pessoa}, com ${midade} anos!`)