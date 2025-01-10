const countLetters = require('./frequencyCounter');

test('Empty String', () => {
    expect(countLetters('')).toStrictEqual({});
})

test('One letter', () => {
    expect(countLetters('a')).toStrictEqual({a: 1});
})

test('Two letters - 1 upper and 1 lower', () => {
    expect(countLetters('Aa')).toStrictEqual({a: 2});
})
