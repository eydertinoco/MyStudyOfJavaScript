//Aceite Strings terminadas com ID;

const validarId = /\d+ID\b/;

console.log(validarId.test("34454ID"));
console.log(validarId.test("dfdggsdfbID"));
console.log(validarId.test("232565745845"));
console.log(validarId.test("ID"));