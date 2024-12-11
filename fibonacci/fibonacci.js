/*

In the Fibonacci sequence, each number is the sum of the two preceding ones.
Starting from 0 and 1, the sequence looks like this:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

**/

function fibonacci(n) {
  if (n <= 0) return 0;  // Return 0 for n = 0
  if (n === 1) return 1; // Return 1 for n = 1
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursion
}

module.exports = fibonacci;
