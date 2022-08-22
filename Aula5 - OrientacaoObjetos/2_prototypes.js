// Prototype de um objeto criado do zero é o Object, que tem os métodos nativos da linguagem.

let pessoa = {
    maos: 2
}

console.log(Object.getPrototypeOf((pessoa)));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);
console.log(pessoa.hasOwnProperty('maos'));

let pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos);
console.log(pessoaNova.hasOwnProperty('maos'));
console.log(Object.getPrototypeOf(pessoaNova) === pessoa);