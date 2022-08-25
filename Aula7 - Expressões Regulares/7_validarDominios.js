let validarDominio = /[?www.]\w+\.com|.com.br/;

console.log(validarDominio.test("www.google.com"));
console.log(validarDominio.test("www.ifal.com.br"));
console.log(validarDominio.test("www.ifal.br"));
console.log(validarDominio.test("ifal.com.br"));