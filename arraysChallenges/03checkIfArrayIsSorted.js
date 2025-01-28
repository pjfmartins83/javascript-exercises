/*

Check if Array is Sorted
Determine if the array is sorted in ascending order.

input: [1, 2, 3, 4, 5]
output: true

input: [2, 1, 5, 7, 3, 1]
output: false

*/

function isSorted(input) {
    for (let i = 1; i < input.length; i++) {
        if (input[i] < input[i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([2, 1, 5, 7, 3, 1]));