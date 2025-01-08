const getTotalBonus = require('./bakerBonus');

// test('1 franchise, 1 day and 13 sales => 2 bonus', () => {
//     const franchise = 1;
//     const days = 1;
//     const sales = [[13]];
//     expect(getTotalBonus(franchise, days, sales)).toBe(2);
// });

test('1 franchise, 1 day and 0 bonus', () => {
    const franchise = 1;
    const days = 1;
    const sales = [[10]];
    expect(getTotalBonus(franchise, days, sales)).toBe(0);
});

test('1 franchise, 2 day and 0 bonus', () => {
    const franchise = 1;
    const days = 1;
    const sales = [[10, 4]];
    expect(getTotalBonus(franchise, days, sales)).toBe(0);
});
