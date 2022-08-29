let promessa = Promise.resolve(4 + 8);

console.log('Algum Código');
promessa.then((value) => console.log(`A soma é ${value}`));

// Falha nas promises
// Exibir o erro no console
let promiseErrada = Promise.resolve(new Error("Algo deu errado"));
promiseErrada
    .then((value) =>console.log(value))
    .catch(reason => console.log("Falha: " + reason));

// Rejeitando Promises
function verificarAlgo(num)  {
    return new Promise((resolve, reject) => {
        if(num == 2) {
            resolve(console.log("O número é 2"));
        } else {
            reject(new Error("Valor não é 2"));
        }
    })
}
verificarAlgo(2);
// verificarAlgo(3);

// Resolvendo várias Promises
const p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(100);
    }, 2500);
})
const p2 = Promise.resolve(5);
const p3 = new Promise(function (resolve, reject) {
    resolve(10);
});
Promise.all([p1, p2, p3]).then((values) => console.log(values));