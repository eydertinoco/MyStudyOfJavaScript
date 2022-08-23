let b = 2;

try {
    let a = 2 + b;
} catch(error) {
    console.log("Algo deu errado: " + error);
}


try {
    let x = y + 1;
} catch(e) {
    console.log("Algo deu errado: " + e);
}

console.log('teste');