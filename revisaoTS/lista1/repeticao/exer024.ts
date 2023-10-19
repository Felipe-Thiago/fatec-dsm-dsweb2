const leitor = require('readline-sync');

let impares:string = "";

let num:number = parseInt(leitor.question("Insira um número inteiro: "));


let i = 0;
while (i < num){
    if (i % 2 == 1){
        impares = impares + i + ", ";
    }
    i++;
}


console.log(`Números ímpares: ${impares}`);