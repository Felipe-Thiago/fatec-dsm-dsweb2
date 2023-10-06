const leitor = require('readline-sync');

let nome:string = leitor.question("Insira seu nome: ");
let sexo:string = leitor.question("Insira o sexo (F/M): ");

if (sexo == "F"){
    console.log(`Seja bem-vinda, ${nome}!`);
} else{
    if (sexo == "M"){
        console.log(`Seja bem-vindo, ${nome}!`)
    }
}