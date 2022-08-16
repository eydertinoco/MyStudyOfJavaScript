function lembrarSoma(x) {
    return function (y) {
        return x + y;
    }
}

let soma1 = lembrarSoma(2);
console.log(soma1(5));

function contador(i) {
    let cont = i;
    console.log(`Contador: ${cont}`);
    let somarContador = function () {
        console.log(`Soma do contador: ${cont}`);
        cont++;
    }
    return somarContador;
}
let meuContador = contador(5);
meuContador();
meuContador();
meuContador();
meuContador();
meuContador();
meuContador();