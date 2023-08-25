const leitor = require('readline-sync')


function VerificaMaior(){
    let x = Number(leitor.question(`Digite um número: `))
    if (x > 0){
        console.log(`O número ${x} é positivo`)
    } else{
        console.log(`O número ${x} é negativo`)
    }
}

function VerificaIntervalo(){
    let x = Number(leitor.question(`Digite um número: `))
    if(x >= 10 && x <= 20){
        console.log(`O número ${x} está entre 10 e 20`)
    } else{
        console.log(`O número ${x} não pertence ao intervalo de 10 a 20`)
    }
}

function VerificaDia(){
    const dia = Number(leitor.question("Digite o dia da semana: "))

    switch (dia) {
        case 1:
            console.log("segunda-feira")
            break;
    
        case 2:
            console.log("terça-feira")
            break;

        case 3:
            console.log("quarta-feira")
            break;

        case 4:
            console.log("quinta-feira")
            break;
        
        case 5:
        case 6:
        case 7:
            console.log("fim de semana")
            break;

        default:
            console.log("dia invalido")
            break;
    }
}

VerificaDia()