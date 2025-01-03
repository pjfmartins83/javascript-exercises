const factorial = require('./factorial');

test('factorial of 0 should be 1', () => {
    expect(factorial(0)).toBe(1);
});

test('factorial of 1 should be 1', () => {
    expect(factorial(1)).toBe(1);
});

test('factorial of 5 should be 120', () => {
    expect(factorial(5)).toBe(120);
});

test('factorial of 10 should be 3628800', () => {
    expect(factorial(10)).toBe(3628800);
});

test('factorial of a negative number should return an error message', () => {
    expect(factorial(-1)).toBe('Input must be a non-negative integer');
});
