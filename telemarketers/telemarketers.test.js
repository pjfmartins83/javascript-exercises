const isTelemarketer = require('./telemarketers');

test('Ignore the call', () => {
    const telephoneNumer = [8, 1, 1, 9];
    expect(isTelemarketer(telephoneNumer)).toBe('Ignore');
})

test('Ignore the call', () => {
    const telephoneNumer = [8, 1, 5, 4];
    expect(isTelemarketer(telephoneNumer)).toBe('Answer');
})

test('Ignore the call', () => {
    const telephoneNumer = [5, 2, 2, 7];
    expect(isTelemarketer(telephoneNumer)).toBe('Answer');
})

test('Ignore the call', () => {
    const telephoneNumer = [5, 8, 2, 8];
    expect(isTelemarketer(telephoneNumer)).toBe('Answer');
})

test('Ignore the call', () => {
    const telephoneNumer = [5, 8, 2, 4];
    expect(isTelemarketer(telephoneNumer)).toBe('Answer');
})
