//Definir variaveis com propriedades do objeto com uma notação diferente

const person = {
    name: 'Jphan',
    lastname: 'Silva'
}

const {name: fname, lastname: lname} = person;

console.log(fname);
console.log(lname);

// Também é possivel com Array.

let nomes = ['Matheus', 'João', 'Pedro']

let [nomeA, nomeB, nomeC] = nomes;

console.log(nomeA);
console.log(nomeB);
console.log(nomeC);