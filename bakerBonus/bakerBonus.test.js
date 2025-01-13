const getTotalBonus = require('./bakerBonus');

test('1 franchise, 1 day and 0 bonus', () => {
    const franchise = 1;
    const days = 1;
    const sales = [[10]];
    expect(getTotalBonus(franchise, days, sales)).toBe(0);
})

test('1 franchise, 2 days and 0 bonus', () => {
    const franchise = 1;
    const days = 2;
    const sales = [[10], [4]];
    expect(getTotalBonus(franchise, days, sales)).toBe(1);
})

test('1 franchise, 1 day and 13 sales', () => {
    const franchise = 1;
    const days = 1;
    const sales = [[13]];
    expect(getTotalBonus(franchise, days, sales)).toBe(2);
})

test('2 franchises, 1 day and 13 sales', () => {
    const franchise = 2;
    const days = 1;
    const sales = [[10, 3]];
    expect(getTotalBonus(franchise, days, sales)).toBe(1);
})
