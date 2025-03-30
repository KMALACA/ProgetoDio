// Nome do heroi 
let nomeDoHeroi = ("elliot")

// Quantidade de XP que o heroi vai ganhar

let quantidadeXP = 10000

// Elo do Heroi

let nivel

// Criar a funçao 
if (quantidadeXP <= 1000) {
  nivel = "ferro";
} else if (quantidadeXP <= 2000) {
  nivel = "Bronze";
}else if (quantidadeXP <= 5000) {
  nivel = "Prata";
}else if (quantidadeXP <= 7000) {
  nivel = "Ouro";
}else if (quantidadeXP <= 8000) {
  nivel = "Platina";
}else if (quantidadeXP <= 9000) {
  nivel = "Ascendente";
}else if (quantidadeXP <= 10000) {
  nivel = "Imortal";
}else if (quantidadeXP <= 10001) {
  nivel = "Radiante";
}
// mostrar na  tela 
// Ao final deve se exibir uma mensagem:
//"O Herói de nome **{nome}** está no nível de **{nivel}**" //

console.log ( " O Heroi de nome " + nomeDoHeroi + " está no Nivel de " + nivel )