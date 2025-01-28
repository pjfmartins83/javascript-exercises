/*

Write a function to find the largest and smallest elements in an array.

input = [1, 2, 3, 4, 5, 6, 7, 8, 9]
output = [9, 1]

*/

function getMaxMin(input) {
    let maxValue = -Infinity;
    let minValue = Infinity;

    for (let i = 0; i < input.length; i++) {
        if (input[i] > maxValue) {
            maxValue = input[i];    
        }
        if (input[i] < minValue) {
            minValue = input[i];
        }
    }

    return [maxValue, minValue];
}

console.log(getMaxMin([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(getMaxMin([-10, 0, 20, 5]));
console.log(getMaxMin([42]));
console.log(getMaxMin([]));
