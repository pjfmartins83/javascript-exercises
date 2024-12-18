const teamWinner = require('./winningTeam');

test('Apples Won', () => {
    expect(teamWinner([1, 1, 1], [0, 0, 0])).toBe('A');
})

test('Bananas Won', () => {
    expect(teamWinner([0, 0, 0], [1, 1, 1])).toBe('B');
})

test('Tie', () => {
    expect(teamWinner([1, 1, 1], [1, 1, 1])).toBe('T');
})
