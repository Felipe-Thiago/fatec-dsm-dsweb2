var readline = require('readline-sync');

let eleitores = Number(readline.question("Insira a quantidade de eleitores de um município: "))

let brancos = Number(readline.question("Insira a quantidade de votos brancos: "))
let nulos = Number(readline.question("Insira a quantidade de votos nulos: "))
let validos = Number(eleitores - brancos - nulos)

let brancosperc = brancos/eleitores*100
let nulosperc = nulos/eleitores*100
let validosperc = validos/eleitores*100


console.log("Os votos válidos representam " + validosperc + "% dos votos")
console.log("Os votos brancos representam " + brancosperc + "% dos votos")
console.log("Os votos nulos representam " + nulosperc + "% dos votos")
