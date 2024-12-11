const getRoboPosition = require('./roboWalker');

test('S move', () => {
    expect(getRoboPosition('S')).toBe(0);
});

test('L move', () => {
    expect(getRoboPosition('L')).toBe(-1);
});

test('R move', () => {
    expect(getRoboPosition('R')).toBe(1);
});
