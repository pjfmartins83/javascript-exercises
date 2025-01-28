/*

Two Sum Problem:
Find two numbers in an array that add up to a specific target.

Input 1 = [2, 7, 11, 15]
Input 2 (target) = 9

Output = [2, 7]

*/

function getSum(input, target) {
    const result = [];

    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] + input[j] === target) {
                result.push([i, j]);
            }
        }
    }

    return result;
}

const input = [2, 7, 11, 15, 7, 2];
const target = 9;

console.log(getSum(input, target));
