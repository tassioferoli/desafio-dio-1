//Variáveis para nome e xp do heroi

let nome = 'Carlos';
let xpHeroi = 7590;

//Extrutura de decisão para verificar se o heroi tem xp suficiente para subir de nível
if (xpHeroi <= 1000) {
   nivelHeroi = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
   nivelHeroi = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
   nivelHeroi = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
   nivelHeroi = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
   nivelHeroi = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
   nivelHeroi = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
   nivelHeroi = "Imortal";
} else if (xpHeroi >= 10001) {
   nivelHeroi = "Radiante";
}

//Exibir o nome e o nível do herói
console.log("O herói " + nome + " está no nível: " + nivelHeroi + ".");