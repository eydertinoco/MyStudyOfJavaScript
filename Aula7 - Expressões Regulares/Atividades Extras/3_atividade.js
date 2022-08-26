//Aceite a expressão "Marca: nomeDaMarca

const validarMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validarMarca.test("Marca: Nike"));
console.log(validarMarca.test("Marca: Vender"));
console.log(validarMarca.test("Puma"));