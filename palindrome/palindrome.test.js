const isPalindrome = require('./palindrome');

test('Two letters', () => {
    expect(isPalindrome('Aa')).toBe(true);
});

test('example kayak', () => {
    expect(isPalindrome('kayak')).toBe(true);
});

test('example paulo', () => {
    expect(isPalindrome('Paulo')).toBe(false);
});

test('example Borrow or rob', () => {
    expect(isPalindrome('Borrow or rob')).toBe(true);
});
