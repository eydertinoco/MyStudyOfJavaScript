function MinhaFuncao(nome) {
    console.log(`Seu nome é ${nome}`);
}

MinhaFuncao("Eyder");
MinhaFuncao("Pedro");

const soma =  function (a, b) {
    return a + b;
}
console.log(soma(3, 5));

function tresNumeros(x, y, z) {
    if (x > 10) {
        return x + (y * z);
    } else if (x == 10 && y > 5) {
        return (x * y) + z;
    } else {
        return x + y + z;
    }
}
console.log(tresNumeros(11, 2, 1));