const isPrime = require('./primeNumber');

test('0', () => {
    expect(isPrime(0)).toBe(false);
})

test('1', () => {
    expect(isPrime(1)).toBe(false);
})

test('2', () => {
    expect(isPrime(2)).toBe(true);
})

test('4', () => {
    expect(isPrime(4)).toBe(false);
})

test('5', () => {
    expect(isPrime(5)).toBe(true);
})

test('6', () => {
    expect(isPrime(6)).toBe(false);
})

test('7', () => {
    expect(isPrime(7)).toBe(true);
})

test('9', () => {
    expect(isPrime(9)).toBe(false);
})


test('11', () => {
    expect(isPrime(11)).toBe(true);
})
