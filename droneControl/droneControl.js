/*

The Challenge:

You control a drone flying in a 2D space.
The drone can move up, down, right, left, or hover in the same spot.

The drone starts at position (0, 0) on a 2D plane. There are five types of moves it can make:

U: Move 1 unit up (increase the y-coordinate by 1).
D: Move 1 unit down (decrease the y-coordinate by 1).
R: Move 1 unit right (increase the x-coordinate by 1).
L: Move 1 unit left (decrease the x-coordinate by 1).
H: Hover (stay at the same position).

Your task is to determine the final position of the drone after performing a sequence of moves.

Input:
A string of at most 50 characters, where each character is U, D, R, L, or H, representing the sequence of moves.

Output:
The final position of the drone as a tuple (x, y).

Examples:

1.
Input: 'UURRDDLL'
Output: (0, 0)

2.
Input: 'UUUHRR'
Output: (2, 3)

3.
Input: 'LLLLDD'
Output: (-4, -2)

*/

function getDronePosition(moves) {
    let x = 0;
    let y = 0;

    for (let move of moves) {
        if (move === 'U') {
            y += 1;
        } else if (move === 'D') {
            y -= 1;
        } else if (move === 'R') {
            x += 1;
        } else if (move === 'L') {
            x -= 1;
        }
    }

    return [x, y];
}

module.exports = getDronePosition;
