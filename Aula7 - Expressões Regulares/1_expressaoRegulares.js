// Criando uma Expressão Regular
let reg1 = new RegExp('teste');
let reg2 = /bola/;

// Retorna True ou False;
// Ele encontrando a string no texto
console.log(/testando/.test("ttttestandoooooooo"));
console.log(reg1.test("OláMundo"));
console.log(reg1.test("Esse mundo não possui teste!"));

let texto = "Pode me dar sua bola?";
console.log(`Há ${reg2} no texto? ${reg2.test(texto)}`);