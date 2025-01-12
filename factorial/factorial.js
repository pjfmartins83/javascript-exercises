/*

Tha Challenge: Factorial Calculation

Write a JavaScript function factorial(n) that calculates the factorial of a given positive integer n.

The factorial of a number n is the product of all positive integers less than or equal to n.
It is denoted as n!. For example:

5! = 5 * 4 * 3 * 2 * 1 = 120
3! = 3 * 2 * 1 = 6
1! = 1
0! = 1 (by definition)

Requirements:

Your function should accept a single argument n, which is a non-negative integer.
The function should return the factorial of n.
If the input is 0, the function should return 1.

*/

function getFactorial(n) {
    if (n < 0) {
        return 'Input must be a non-negative number';
    } else if ( n === 0) {
        return 1;
    } else if (n > 0) {
        let result = 1;

        for (let i = 1; i <= n; i++) {
            result = result * i;
        }

        return result;
    }
}
    
console.log(getFactorial(10));

module.exports = getFactorial;