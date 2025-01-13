const needMoney = require('./schoolTrip');

test('money raised is sufficient - case study', () => {
    expect(needMoney(100, [0.25, 0.25, 0.25, 0.25], 100)).toBe('No');
})

test('money raised is insufficient', () => {
    expect(needMoney(5000, [0.25, 0.25, 0.25, 0.25], 100)).toBe('Yes');
})

test('money raised is sufficient', () => {
    expect(needMoney(50, [0.25, 0.25, 0.25, 0.25], 100)).toBe('No');
})
