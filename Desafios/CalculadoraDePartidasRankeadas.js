// Usei a mesma Logica do Nivel do Heroi só coloquei dentro de uma função!
//

let win = 101
let loss = 0

let result = win - loss

let elo

function calcularElo() {
  if (result <= 10) {
    elo = "Ferro"
  } else if (result <= 20) {
    elo = "Bronze"
  }else if (result <= 50) {
    elo = "Prata"
  }else if (result <= 80) {
    elo = "Ouro"
  }else if (result <= 90) {
    elo = "Diamante"
  }else if (result <= 100) {
    elo = "Lendario"
  }else if (result >= 101) {
    elo = "Imortal"
  }


  console.log ("O Heroi tem de saldo de vitorias " + result + " esta no nivel de " + elo )
}


calcularElo();
