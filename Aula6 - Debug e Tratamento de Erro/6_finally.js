let y = 2;

try {
    let x = y + 1;
} catch(e) {
    console.log("Algo deu errado: " + e);
} finally {
    console.log("Executou");
}
