function Cachorro(raca, pata, cor) {
    this.raca = raca;
    this.pata = pata;
    this.cor = cor;
}

Cachorro.prototype.uivar = function () {
    console.log("Auuuuuuuu");
}

let pug = new Cachorro("Pug", 4, "Branco & Preto");
console.log(pug);
pug.uivar();