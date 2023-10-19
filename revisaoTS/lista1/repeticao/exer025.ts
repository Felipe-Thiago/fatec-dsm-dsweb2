const leitor = require('readline-sync');

let ano:number = parseInt(leitor.question("Insira um ano de nascimento: "));

let idade:number = 2023 - ano;

for (let i = 0; i <= idade; i++){
    console.log(`Ano = ${ano + i} | Idade = ${i}`);
}