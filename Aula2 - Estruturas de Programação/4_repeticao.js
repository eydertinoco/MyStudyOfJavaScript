// While
let x = 10;
while (x > 0) {
    console.log(`O x é ${x}`);
    x = x -1;
}

let y = 0;
while (y < 10) {
    console.log(`O y é ${y}`);
    y = y + 1;
}

// Do While
let z = 0;
do {
    console.log(z);
    z = z + 1;
} while (z < 5);

// FOR
for(let numero = 2; numero < 100; numero = numero * 2) {
    console.log(`O numero é: ${numero}`);
}

// Break (para o loop)
for(let numero = 2; numero < 100; numero *= 2) {
    if (numero == 8) {
        console.log("Ativando o Break")
        break;
    }
    console.log(`O numero é: ${numero}`);
}

// Continue
for(let numero = 10; numero > 0; numero--) {
    if (numero % 2 == 0) {
        console.log("Caiu no continue")
        continue;
    }
    console.log(`O numero é: ${numero}`);
}