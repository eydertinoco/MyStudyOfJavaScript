// Propagação
let btn1 = document.querySelector("#btn1");
let p = document.querySelector("p");

function msg(e) {
    console.log("Clicou no botão");
    // Sem o codigo de baixo, ao clicar no botão o evento do paragrafo também ocorre.
    // Dessa forma impedindo a propagação
    e.stopPropagation()
}

btn1.addEventListener("click", msg);

p.addEventListener("click", function () {
    console.log("Clicou no paragrafo");
})

//Event Default
let a = document.querySelector("a");

a.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Não vai mudar de link");
})