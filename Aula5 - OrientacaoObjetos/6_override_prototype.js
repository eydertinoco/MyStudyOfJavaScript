class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
    latir() {
        console.log("Au au");
    }
}

Cachorro.prototype.raca = "SRD";
Cachorro.prototype.pata = 4;

let labrador = new Cachorro('Labrador', "Amarelo");
console.log(labrador.pata);
labrador.latir();
console.log(labrador);