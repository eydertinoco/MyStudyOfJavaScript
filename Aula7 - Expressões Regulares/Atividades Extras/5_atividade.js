//Aceitar a-z, _ e -, número 0-9, minimo 3 caracteres e máximo 16;

let validarNome = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarNome.test("eyder_1-2-3"));
console.log(validarNome.test("eYDr_1-2-3"));
console.log(validarNome.test("eyd"));
console.log(validarNome.test("ey"));
console.log(validarNome.test("eydereyder123456"));
console.log(validarNome.test("eydereyder1234567"));