/*

Check if a number is prime or not.

*/

function isPrime(num) {
    if (num < 2) return false;
    for (i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

module.exports = isPrime;
