const numberOfGames = require('./slotMachines');

test('Martha wins on first machine at first play', () => {
    // Test case 1: Basic test
    expect(numberOfGames(1, 34, 0, 0)).toBe(40);
})
