/*

Reverse an Array
Reverse the array in place.

input = [1, 2, 3, 4, 5]
output = [5, 4, 3, 2, 1]

*/

function reverseArray(input) {
    let reversedArray = [];

    for (let i = 0; i < input.length; i++) {
        reversedArray.unshift(input[i]);
    }

    return reversedArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray([5, 4, 3, 2, 1]));
