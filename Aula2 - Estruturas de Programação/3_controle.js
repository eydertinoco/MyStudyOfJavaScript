let idade = 19;

if (idade >= 18) {
    console.log(`Usuário criado.`);
} else {
    console.log(`Usuário bloqueado.`)
}

let nome = "Eyder";

if (idade >= 18 && nome === "Eyder") {
    console.log(`${nome} se tornou administrador.`);
} else if (idade >= 18) {
    console.log(`${nome} não pode ser administrador, mas pode criar sua conta pessoal.`)
} else {
    console.log(`Esse usuário não pode se tornar administrador.`)
}