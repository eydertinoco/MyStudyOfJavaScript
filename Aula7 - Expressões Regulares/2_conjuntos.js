let reg = /[0-9]/;
// Aceita todos valores com 0 a 9. Verifica a existencia de numero;
//
let text = "Há 23 nesse texto?";
//
let regValue = reg.test(text);
// console.log(regValue);

// Caracteres Especiais
// \d - Qualquer dígito de caracter
// \w - Um caractere alfanumético
// \s - Qualquer caracter de espaço em branco
// \D - Caracteres que não são digitos
// \W - Caracteres não-alfanumético
// \S - não seja espaço em branco
// . - Qualquer cracteres, menos nova linha
let Regex;
console.log("---- /./");
Regex = /./;
console.log(Regex.test("sadd"));
console.log(Regex.test(" "));
console.log(Regex.test("123"));
console.log(Regex.test("12asvb"));

console.log("---- /\d/");
Regex = /\d/;
console.log(Regex.test("sadd"));
console.log(Regex.test(" "));
console.log(Regex.test("123"));
console.log(Regex.test("12asvb"));

console.log("---- /\w/");
Regex = /\w/;
console.log(Regex.test("sadd"));
console.log(Regex.test(" "));
console.log(Regex.test("123"));
console.log(Regex.test("12asvb"));