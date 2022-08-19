// Forma de uma função receber indefinidos parâmetros
// operador rest vira um array;

function imprimirNumeros(...args) {
    for(let i = 0; i <args.length; i++) {
        console.log(args[i]);
    }
}

let num=1;
let num2=4;
let num3=5;
let num4=8;

imprimirNumeros(num, num2);
console.log("Pausa");
imprimirNumeros(num, num2, num4);
console.log("Pausa");
imprimirNumeros(num, num3, num4);