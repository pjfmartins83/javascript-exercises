const getNumberOfPlays = require('./slotMachines');

test('One quarter, first machine starts with 0', () => {
    expect(getNumberOfPlays(1, 0, 0, 0)).toBe(1);
})

test('Two quarters, first machine starts with 0', () => {
    expect(getNumberOfPlays(2, 0, 0, 0)).toBe(2);
})

test('One quarter, first machine starts with 34', () => {
    expect(getNumberOfPlays(1, 34, 0, 0)).toBe(40);
})

test('Two quarter, second machine starts with 99', () => {
    expect(getNumberOfPlays(2, 0, 99, 0)).toBe(80);
})

test('Three quarters, third machine starts with 9.', () => {
    expect(getNumberOfPlays(3, 0, 0, 9)).toBe(12);
})
