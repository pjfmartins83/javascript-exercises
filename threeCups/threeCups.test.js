const getBallPosition = require('./threeCups');

test('No swaps', () => {
    expect(getBallPosition('')).toBe(1);
});

test('Swap A', () => {
    expect(getBallPosition('A')).toBe(2);
});

test('Swap B', () => {
    expect(getBallPosition('B')).toBe(1);
})

test('Swap C', () => {
    expect(getBallPosition('C')).toBe(3);
})

test('Swap AB', () => {
    expect(getBallPosition('AB')).toBe(3);
})

test('Swap BC', () => {
    expect(getBallPosition('BC')).toBe(3);
})

test('Swap AC', () => {
    expect(getBallPosition('AC')).toBe(2);
})

test('Swap ABC', () => {
    expect(getBallPosition('ABC')).toBe(1)
})
