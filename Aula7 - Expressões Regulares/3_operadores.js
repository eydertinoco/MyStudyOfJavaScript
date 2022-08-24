// Operador not
let palavrasSem123 = /[^123]/;
console.log(palavrasSem123.test("1112"));
console.log(palavrasSem123.test("14"));
console.log(palavrasSem123.test("1"));

console.log("----------")

let palavrasSemAeB = /[^ab]/;
console.log(palavrasSemAeB.test("a"));
console.log(palavrasSemAeB.test("aqui tem a"));
console.log(palavrasSemAeB.test("ola mainha"));

console.log("--- Operador Plus");

let muitosOuPoucosDigitos = /\d+/;
console.log(muitosOuPoucosDigitos.test("123"));
console.log(muitosOuPoucosDigitos.test("dsadsaudasda"));
console.log(muitosOuPoucosDigitos.test("123456789"));
console.log(muitosOuPoucosDigitos.test(""));

console.log("--- Operador Question");

let opcional = /Abacax?i/;
console.log(opcional.test("Abacaxi"));
console.log(opcional.test("Abacai"));

console.log("--- Operador de precisão");

let precisao = /\d{4,5}-\d{4}/;
console.log(precisao.test("4004-5050"));
console.log(precisao.test("99229-8382"));
console.log(precisao.test("99999-9999"));
console.log(precisao.test("2-3456"));
console.log(precisao.test("999999-3"));