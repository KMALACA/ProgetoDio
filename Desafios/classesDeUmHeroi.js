// Criando o heroi

class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }


  // ataque do heroi
  
atacar() {
  
    let ataque;

    if (this.tipo == "mago") {
      ataque = "magia";

      
    } else if (this.tipo == "guerreiro") {
      ataque = "espada";



      
    } else if (this.tipo == "monge") {
      ataque = "artes marciais"; 

      
    } else if (this.tipo == "ninja") {
      ataque = " shuriken ";
    }  

    console.log("O herói de " + this.idade + " anos " + this.nome + " e de classe " + this.tipo + ", atacou usando " + ataque +"!");


  
  }
}


// new = Cria um objeto novo a partir de uma clasee, vinculada ao this...

let personagem = new Heroi("Goku", "33", "ninja");
personagem.atacar();