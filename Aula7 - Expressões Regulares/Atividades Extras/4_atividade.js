//Validar endereços de IP ex: 127.0.0.1

const validarIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validarIP.test("127.0.0.1"));
console.log(validarIP.test("999.999.999.999"));
console.log(validarIP.test(""));