// Classe é molde de um objeto
// Prototype pode ser chamado de classe.

let cachorro = {
    raca: '',
    patas: 4,
    latir: function () {
        console.log("Au Au")
    }
}

console.log(cachorro);

let pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "Pastor Alemão";

let labrador = Object.create(cachorro);
labrador.raca = "Labrador";

console.log(pastorAlemao);
console.log(labrador);

// Construtor por funcao
function criarCachorro(raca, patas, cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    return cachorro;
}

let Dorbman = criarCachorro('Dorbman', 4, 'Preto');
console.log(Dorbman);

//Construtor por New
function Cachorro(raca, pata, cor) {
    this.raca = raca;
    this.pata = pata;
    this.cor = cor;
    this.latir = function() {
        return "Au au";
    }
}

let huskey = new Cachorro('Huskey', 4 ,'Marrom');
console.log(huskey)
console.log(`O ${huskey.raca} faz ${huskey.latir()}`)