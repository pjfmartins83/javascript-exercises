const occupiedSpaces = require('./occupiedSpaces');

test('no spaces occupied on both days', () => {
    const spaces = 4;
    const yesterday = '....';
    const today = '....';
    expect(occupiedSpaces(spaces, yesterday, today)).toBe(0);
});

test ('all spaces occupied on both days', () => {
    const spaces = 5;
    const yesterday = 'CCCCC';
    const today = 'CCCCC';
    expect(occupiedSpaces(spaces, yesterday, today)).toBe(5);
})

test ('random occupied spaces on both days', () => {
    const spaces = 6;
    const yesterday = 'CC.C.';
    const today = 'C..C.';
    expect(occupiedSpaces(spaces, yesterday, today)).toBe(2);
})
