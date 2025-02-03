/*

Rotate an Array:
Rotate the array to the right by k steps.

input 1 = [1, 2, 3, 4, 5, 6]
input 2 (k) = 2

output = [5, 6, 1, 2, 3, 4]

*/

function rotateTheArray(input, k) {
    let count = 0;

    while(count < k) {
        input.unshift(input.pop());
        count++;
    }

    return input;
}

console.log(rotateTheArray([1, 2, 3, 4, 5, 6], 2));
