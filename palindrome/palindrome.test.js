const palindrome = require('./palindrome');

test('one letter', () => {
    expect(palindrome('aa')).toBe(true);
});
