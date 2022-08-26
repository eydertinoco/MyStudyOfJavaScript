console.log("Ainda não chamou o callback");

// Vai esperar ser executado ao passar 2s;
setTimeout(function () {
    console.log("Chamou o callback");
}, 2000);

console.log("Ainda não chamou o callback");