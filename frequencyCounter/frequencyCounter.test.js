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

test('One more test', () => {
    expect(countLetters('AAbbCcdDEe')).toStrictEqual({a: 2, b: 2, c: 2, d: 2, e: 2});
})
