// Evento é atrelado a ID #btn
// listener vai ouvir o evento, nessa caso ele ouve o click

let btn = document.querySelector("#btn");

function msg() {
    console.log("Clicou no Botão e chamou o evento");
}

btn.addEventListener("click", msg)

// Removendo evento
let removebtn = document.querySelector("#removebtn");
removebtn.addEventListener("click", function () {
    btn.removeEventListener("click", msg);
});

// Objeto do evento
// O objeto é criado automaticamente
// pode ser nomeada de e ou event
function msgGenerica(event) {
    console.log(event);
}
