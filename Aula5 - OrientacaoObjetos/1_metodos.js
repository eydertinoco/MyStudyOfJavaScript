// Servem como ação do objeto

let cachorro = {
    latir: function () {
        console.log("Au au");
    },
    rosnar: function () {
        console.log("Grrr")
    }
}
cachorro.latir();
cachorro.rosnar();

let pessoa = {
    nome: "",
    setNome: function (novoNome) {
        this.nome = novoNome;
    },
    getNome: function () {
        return this.nome;
    }
}

pessoa.setNome("Eyder")
console.log(pessoa.getNome());