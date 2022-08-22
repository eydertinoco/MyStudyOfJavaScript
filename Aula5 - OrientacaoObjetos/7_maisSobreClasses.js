//Herança
class Mamifero {
    constructor(tetas) {
        this.tetas = tetas;
    }
}

class Cachorro extends Mamifero {
    constructor(raca, cor, tetas) {
        super(tetas, tetas);
        this._raca = raca;
        this._cor = cor;
    }
    latir() {
        console.log("Au au");
    }

    // Getter e Setter
    get raca() {
        return this._raca;
    }
    set raca(value) {
        this._raca = value;
    }

    get cor() {
        return this._cor;
    }
    set cor(value) {
        this._cor = value;
    }
}

// Symbol
// Propriedades ùnicas, não podem ser alteradas ou criada duas vezes.
// É como uma constante, só que para propriedade de objetos.
let patas = Symbol();
Cachorro.prototype[patas] = 4;
console.log(Cachorro.prototype[patas]);

let labrador = new Cachorro('Labrador', "Amarelo", true);
console.log(labrador);
console.log(labrador[patas]);
labrador.latir();

let pastor = new Cachorro('Pastor Alemão', 'Desconhecido', true);
console.log(pastor);
pastor.cor = 'Marrom';
console.log(pastor);

// InstanceOf Operation
// Verificar se o Cachorro é filho da classe Mamifero (retorna True ou False);
console.log(new Cachorro instanceof Mamifero);