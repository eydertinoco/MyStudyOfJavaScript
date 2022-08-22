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
console.log(pastorAlemao.latir());

console.log(labrador);
console.log(labrador.latir());