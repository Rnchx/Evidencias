let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [2, 4, 6, 8, 10];
let arrayEmComum = [];

for (let i = 0; i< array1.length; i++) {
    for (let o = 0; o < array2.length; o++) {
        if(array1[i] == array2[o]) {
            arrayEmComum.push(array1[i]);
        }
    }
}

console.log(arrayEmComum);
