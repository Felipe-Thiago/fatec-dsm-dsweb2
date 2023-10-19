const leitor = require('readline-sync');

let num:number = parseInt(leitor.question("Insira um número: "));

if (num % 2 == 0){
    console.log(`${num} é par`)
} else{
    console.log(`${num} é impar`)
}