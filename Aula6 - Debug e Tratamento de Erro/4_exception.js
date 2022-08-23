// Criar erros

// let a = 1;
// if(a != 2) {
//     throw new Error("O valor de a não pode ser 1");
// }

function saudacoes(nome) {
    if(typeof nome != 'string') {
        throw new Error("Parâmetro nome tem ser uma String");
    } else {
        console.log(`Olá ${nome}`);
    }
}

saudacoes("Eyder");
saudacoes(5);