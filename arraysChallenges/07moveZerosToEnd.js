/*

Move Zeros to End
Rearrange the array so all 0s are at the end while maintaining the order of non-zero elements.

input = [1, 0, 0, 2, 3, 0, 4, 0, 5]
output = [1, 2, 3, 4, 5, 0, 0, 0, 0]

*/

function moveZeroEnd(input) {
    let newLength = input.length;

    for (let i = 0; i < newLength; i++) {
        if (input[i] === 0) {
            input.push(input.splice(i, 1)[0]);
            i--;
            newLength--;
        }
    }

    return input;
}

const input = [1, 0, 0, 2, 3, 0, 4, 0, 5];
console.log(moveZeroEnd(input));
