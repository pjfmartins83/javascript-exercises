/*

The Challenge:

You control a robot on a 1D Line (one dimensional line).
Movement along the line involves either increasing (right) or decreasing (left) the number.

The robot starts at position 0. There are three types of moves it can make:

1. L: Move 1 step to the left (decrease position by 1).
2. R: Move 1 step to the right (increase position by 1).
3. S: Stay in the same position (do nothing).
Your task is to determine the final position of the robot after performing a sequence of moves.

Input:
- A string of at most 50 characters, where each character is L, R, or S, representing a sequence of moves.

Output:
- The final position of the robot on the line.

Example:
- Input: 'LRRLLS'
- Output: -1

*/

function getRoboPosition(moves) {
    let roboPosition = 0;

    for (let move of moves) {
        if (move === 'L') {
            roboPosition -= 1;
        } else if (move === 'R') {
            roboPosition += 1;
        } else if (move === 'S') {
            // do nothing
        }
    }

    return roboPosition;
}

module.exports = getRoboPosition;
