const leitor = require('readline-sync');

let num:number = parseInt(leitor.question("Insira um número: "));
let msg:string = "";

for (let i = 0; i < num; i++){
    msg = msg + "* ";
}

console.log(msg)