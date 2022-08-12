// node 3_operadoresLogicos.js

// && - and (para ser verdadeiro os dois lados precisam ser verdadeiros)
// || - or (para ser verdadeiro um dos lados precisam ser verdadeiro)
// ! - Not (Inverte o valor boolean true vira false e false vira true)

console.log('Operadores Lógicos');
console.log(`1. ${5 > 3 && 3 == 2}`)
console.log(`2. ${5 > 3 || 3 == 1}`)
console.log(`3. ${3 == 3 && "Matheus" == 'Matheus'}`)
console.log(`4. ${"Felipe" > "João" || false}`)
console.log(`5. ${!(!(true && true))}`)

// Operador Ternário
console.log('Operadores Ternários');
console.log(`6. ${5 > 2 ? 'É sim':'É não'}`);
console.log(`7. ${false ? 5:4}`);
console.log(`8. ${"Meu nome" === "Meu nome" ? "Olá!":"Tem certeza que esse é seu nome?"}`);