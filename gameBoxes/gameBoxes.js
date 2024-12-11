/*

Game of Boxes

You have three numbered boxes: 1, 2, and 3.
Initially, Box 1 contains a coin, while the other boxes are empty.
There are three possible operations that can move the coin between the boxes:

X: Swap the contents of Boxes 1 and 2.
Y: Swap the contents of Boxes 2 and 3.
Z: Swap the contents of Boxes 1 and 3.
Your task is to determine the final box containing the coin after performing a sequence of operations.

Input:
- A string of at most 50 characters, where each character is X, Y, or Z, representing a sequence of operations.

Output:
- The number of the box (1, 2, or 3) that contains the coin after all operations.

Example:
- Input: 'XYZ'
- Output: 2

**/

function getCoinPosition(swaps) {
    coinPosition = 1;

    for(let swap of swaps) {
        if (swap === 'X') {
            if (coinPosition === 1) {
                coinPosition = 2;
            } else if (coinPosition === 2) {
                coinPosition = 1;
            }
        } else if (swap === 'Y') {
            if (coinPosition === 2) {
                coinPosition = 3;
            } else if (coinPosition === 3) {
                coinPosition = 2;
            }
        } else if (swap === 'Z') {
            if (coinPosition === 1) {
                coinPosition = 3;
            } else if (coinPosition === 3) {
                coinPosition = 1;
            }
        }
    }

    return coinPosition;
}

module.exports = getCoinPosition;
