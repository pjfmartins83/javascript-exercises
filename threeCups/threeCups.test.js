const getBallPosition = require('./threeCups');

test('No Swaps', () => {
    expect(getBallPosition('')).toBe(1);
})

test('One Swap', () => {
    expect(getBallPosition('A')).toBe(2);
})

test('One Swap', () => {
    expect(getBallPosition('B')).toBe(1);
})

test('One Swap', () => {
    expect(getBallPosition('C')).toBe(3);
})

test('Two Swaps', () => {
    expect(getBallPosition('AB')).toBe(3);
})

test('Two Swaps', () => {
    expect(getBallPosition('AC')).toBe(2);
})

test('Two Swaps', () => {
    expect(getBallPosition('BC')).toBe(3);
})

test('Three Swaps', () => {
    expect(getBallPosition('ABC')).toBe(1);
})
