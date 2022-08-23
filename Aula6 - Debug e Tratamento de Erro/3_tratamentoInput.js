function checarNumero(num) {
    let number = Number(num);
    if (Number.isNaN(number)) {
        alert("Por favor, passe só números para o programa.")
        return null;
    } else {
        console.log(`O valor adicionado é ${number}`);
        return number;
    }
}

let number = prompt("Digite um número");
checarNumero(number);