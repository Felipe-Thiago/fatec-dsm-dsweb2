const leitor = require('readline-sync');

let aux:string = "";
let preco:number = 0;
let suite:string = "";

console.log("Bem vindo ao hotel");

console.log("==============================");

console.log("Possuímos as seguintes opções de quartos: ");
console.log("1. Suite");
console.log("2. Suite Master");
console.log("3. Suite Mega Blaster");
let tipo:number = parseInt(leitor.question("Insira opcao: "));

console.log("==============================");

console.log("A estadia será de algumas horas ou dias?")
console.log("1. Algumas horas");
console.log("2. Dias");
let calculo:number = parseInt(leitor.question("Insira opcao: "));
if (calculo == 1){
    aux = "horas";
} else if(calculo == 2){
    aux = "dias";
}
console.log("==============================");

let qtd:number = parseInt(leitor.question(`Insira a quantidade de ${aux}: `))

console.log("==============================");

switch (tipo){
    case 1:
        suite = "Suite";
        if (calculo == 1 && qtd <= 6){
            preco = 30;
        } else if(calculo == 1 && qtd > 6){
            preco = 60;
        } else if(calculo == 2){
            preco = qtd * 60;
        }
        break;
    case 2:
        suite = "Suite Master";
        if (calculo == 1 && qtd <= 6){
            preco = 50;
        } else if(calculo == 1 && qtd > 6){
            preco = 90;
        } else if(calculo == 2){
            preco = qtd * 90;
        }
        break;
    case 3:
        suite = "Suite Mega Blaster";
        if (calculo == 1 && qtd <= 6){
            preco = 80;
        } else if(calculo == 1 && qtd > 6){
            preco = 140;
        } else if(calculo == 2){
            preco = qtd * 140;
        }
        break;
}

console.log(`O preço por passar ${qtd} ${aux} na ${suite} é de R$${preco.toFixed(2)}`);