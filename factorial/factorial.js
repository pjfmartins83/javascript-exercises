function factorial(n) {
    if (n < 0) {
        return 'Input must be a non-negative integer';
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

module.exports = factorial;
