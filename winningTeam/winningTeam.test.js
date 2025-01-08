const getWinnerTeam = require('./winningTeam');

test('Apple Won', () => {
    const applePoints = { threePoints: 10, twoPoints: 7, onePoint: 5 };
    const bananaPoints = { threePoints: 4, twoPoints: 6, onePoint: 4 };
    expect(getWinnerTeam(applePoints, bananaPoints)).toBe('A');
})

test('Banana Won', () => {
    const applePoints = { threePoints: 5, twoPoints: 7, onePoint: 5 };
    const bananaPoints = { threePoints: 9, twoPoints: 9, onePoint: 10 };
    expect(getWinnerTeam(applePoints, bananaPoints)).toBe('B');
})

test('Tie', () => {
    const applePoints = { threePoints: 10, twoPoints: 7, onePoint: 4 };
    const bananaPoints = { threePoints: 10, twoPoints: 7, onePoint: 4 };
    expect(getWinnerTeam(applePoints, bananaPoints)).toBe('T');
})
