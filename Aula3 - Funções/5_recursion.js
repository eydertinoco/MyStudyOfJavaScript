function recursao(n) {
    if(n - 1 < 2) {
        console.log(`Recursão parou`);
    } else if (n % 2 != 0) {
        console.log(`Número é impar`);
        recursao(n-1);
    } else {
        console.log(`Número é par`);
        recursao(n - 2);
    }
}

recursao(9);
recursao(10);
recursao(1);