const getFactorial = require('./factorial');

test('Factorial of 0 should be 1', () => {
    expect(getFactorial(0)).toBe(1);
});

test('Factorial of 1 should be 1', () => {
    expect(getFactorial(1)).toBe(1);
});

test('Factorial of 5 should be 120', () => {
    expect(getFactorial(5)).toBe(120);
});

test('Factorial of 10 should be 3628800', () => {
    expect(getFactorial(10)).toBe(3628800);
});

test('Factorial of a negative number should return an error message', () => {
    expect(getFactorial(-1)).toBe('Input must be a non-negative number');
});
