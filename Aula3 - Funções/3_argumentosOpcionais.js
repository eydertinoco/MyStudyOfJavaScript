function usuario(nome, idade) {
    if(idade === undefined) {
        console.log("Seu nome é " + nome + ".");
    } else {
        console.log(`Seu nome é ${nome} e você tem ${idade} anos.`)
    }
}

usuario("João");
usuario("João", 20);

function repetirFrase(frase, n = 2) {
    for(let x = 1; x < n; x++) {
        console.log(`${frase} ${x}`)
    }
}

repetirFrase("testando", 10);
repetirFrase("padrão");