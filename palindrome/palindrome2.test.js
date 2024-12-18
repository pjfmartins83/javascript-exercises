const isPalindrome = require('./palindrome');

test('one letter', () => {
    expect(isPalindrome('aa')).toBe(true);
});
