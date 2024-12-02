const fibonacci = require('./fibonacci');

test('fibonacci of 0 is 0', () => {
  expect(fibonacci(0)).toBe(0);
});

test('fibonacci of 1 is 1', () => {
  expect(fibonacci(1)).toBe(1);
});

test('fibonacci of 2 is 1', () => {
  expect(fibonacci(2)).toBe(1);
});

test('fibonacci of 3 is 2', () => {
  expect(fibonacci(3)).toBe(2);
});

test('fibonacci of 4 is 3', () => {
  expect(fibonacci(4)).toBe(3);
});

test('fibonacci of 5 is 5', () => {
  expect(fibonacci(5)).toBe(5);
});

test('fibonacci of 6 is 8', () => {
  expect(fibonacci(6)).toBe(8);
});
