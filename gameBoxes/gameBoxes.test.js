const getCoinPosition = require('./gameBoxes');

test('No swaps', () => {
    expect(getCoinPosition('')).toBe(1);
});

test('Swap X', () => {
    expect(getCoinPosition('X')).toBe(2);
});

test('Swap Y', () => {
    expect(getCoinPosition('Y')).toBe(1);
})

test('Swap Z', () => {
    expect(getCoinPosition('Z')).toBe(3);
})
