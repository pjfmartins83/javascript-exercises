/*

Write a function to find the second largest element in an array.

input = [1, 5, 7, 3, 6, 9, 2, 1]
output = 7

*/

function getSecondLargest(input) {
    if (input.length < 2) {
        return 'Array precisa ter ao menos dois elementos';
    }

    let maxValue = -Infinity;
    let secondMaxValue = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] > maxValue) {
            secondMaxValue = maxValue;
            maxValue = input[i]; 
        } 
        if (input[i] > secondMaxValue && input[i] < maxValue) {
            secondMaxValue = input[i];
        }
    }

    return secondMaxValue;
}

console.log(getSecondLargest([1, 5, 7, 3, 6, 9, 2, 1]));
