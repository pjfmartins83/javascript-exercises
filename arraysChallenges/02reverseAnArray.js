/*

Reverse an Array
Reverse the array in place.

input = [1, 2, 3, 4, 5]
output = [5, 4, 3, 2, 1]

*/

function reverseArray(input) {
    let left = 0;
    let right = input.length - 1

    while (left < right) {
        [input[left], input[right]] = [input[right], input[left]];
        left ++;
        right--;
    }

    return input;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
