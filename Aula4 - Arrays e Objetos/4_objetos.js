let pessoa = {
    nome: "Eyder",
    profissao: "Programador",
    idade: 28,
    trabalhar: function () {
        console.log("Teclado fazendo barulho");
    }
}

console.log(pessoa.nome);
console.log(pessoa.profissao);
console.log(pessoa.idade);
pessoa.trabalhar();

delete pessoa.nome;
console.log(pessoa.nome);

pessoa.casado = false;
console.log(pessoa.casado);

pessoa.nome = "Eyder";
console.log(pessoa);

let carro = {
    porta: 2,
    portamala: '200L',
    motor: '2.0'
}
let adicionais = {
    tetosolar: true,
    arcondicionado: true
}

console.log(carro);
Object.assign(carro, adicionais);
console.log(carro);

console.log(Object.keys(carro));
