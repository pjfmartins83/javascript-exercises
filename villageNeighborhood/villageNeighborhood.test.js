const getSmallestVillage = require('./villageNeighborhood');

test('3 villages', () => {
    expect(getSmallestVillage([6, 10, 15])).toBe(4.5);
});

test('4 villages', () => {
    expect(getSmallestVillage([6, 10, 15, 16])).toBe(3);
});
