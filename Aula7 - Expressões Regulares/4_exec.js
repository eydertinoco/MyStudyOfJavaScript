// Retorna um objeto com algumas informações

let teste = /\d+/.exec("O número 100");

let teste2 = /\d+/.exec("O número aqui é 100 e foi encontrado.");
let teste3 = /\d+/.exec("Aqui não tem número");

console.log(teste);
console.log(teste.index);
console.log("----------");
console.log(teste2);
console.log(teste2.index);
console.log("----------");
console.log(teste3);
console.log(teste3.index);