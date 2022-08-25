// Resposta é true or false

let fruta = /\d+ (bananas|maçãs|laranjas)/;

console.log(fruta.test("10 bananas"));
console.log(fruta.test("25 batatas"));
console.log(fruta.test("100 laranjas"));

console.log("----");

let nome = /\w+ - (Matheus|Roberto|Eyder)/;

console.log(nome.test("Nome - Eyder"));
console.log(nome.test("Nome - Lauro"));