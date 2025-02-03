const isTelemarketer = require('./telemarketers');

test('Ignore the call', () => {
    const telephoneNumber = [8, 1, 1, 9];
    expect(isTelemarketer(telephoneNumber)).toBe('Ignore');
})

test('Answer the call', () => {
    const telephoneNumber = [8, 1, 5, 4];
    expect(isTelemarketer(telephoneNumber)).toBe('Answer');
})

test('Answer the call', () => {
    const telephoneNumber = [5, 2, 2, 7];
    expect(isTelemarketer(telephoneNumber)).toBe('Answer');
})

test('Answer the call', () => {
    const telephoneNumber = [5, 8, 2, 8];
    expect(isTelemarketer(telephoneNumber)).toBe('Answer');
})

test('Answer the call', () => {
    const telephoneNumber = [5, 8, 2, 4];
    expect(isTelemarketer(telephoneNumber)).toBe('Answer');
})
