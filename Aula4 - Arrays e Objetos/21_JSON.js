// JSON = JavaScript Object Notation
// Comunicação Back com Front

let pessoa = {
    "name": "Eyder",
    "age": 20,
    "position": "Developer",
    "languages": ["JavaScript", "Java"]
}

let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);
let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON);