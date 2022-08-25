let validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("eyder@gmail.com"));
console.log(validarEmail.test("eyder@hotmail.com.br"));
console.log(validarEmail.test("eyder@teste.teste"));
console.log(validarEmail.test("eyder@teste"));
console.log(validarEmail.test("eyder@teste.org.com.br.al"));