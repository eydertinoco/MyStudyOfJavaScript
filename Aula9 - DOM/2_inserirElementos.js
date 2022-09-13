let novoElemento = document.createElement("p");
novoElemento.setAttribute("id", "teste");
let elementoAlvo = document.querySelector('#myId');
let elementoPai = document.querySelector('#container');
elementoPai.insertBefore(novoElemento, elementoAlvo);
// É inserido uma tag <p> antes do #myId

let novoElemento2 = document.createElement("p");
let texto = document.createTextNode("Algum Texto");
novoElemento2.appendChild(texto);

let p = document.querySelector('#paragrafo');
let pai = p.parentNode;
pai.appendChild(novoElemento2);
// Insere tag p com valor debaixo do <p id='#paragrafo'>

// Adicionando novo texto em uma tag existente
let texto3 = document.createTextNode("Texto inserido em uma tag existente pelo js ");
let p3 = document.getElementById("paragrafo3");
p3.appendChild(texto3)