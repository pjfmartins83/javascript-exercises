const isTelemarketer = require('./telemarketers');

test('should return ignore', () => {
    expect(isTelemarketer([8, 1, 1, 9])).toBe('ignore');
})

test('should return answer', () => {
    expect(isTelemarketer([5, 4, 6, 2])).toBe('answer');
})
