function iterarArray(arr) {
    if(arr.length == 0) {
        throw new Error("O array precisa ter elementos");
    } else {
        for(let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
}

console.log("Hello");
let arr1 = [5, 3, 2, 7, 0]
let arr2 = []
iterarArray(arr1);
iterarArray(arr2);