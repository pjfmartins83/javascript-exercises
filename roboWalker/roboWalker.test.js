const getRoboPosition = require('./roboWalker');

test('No Moves', () => {
    expect(getRoboPosition('S')).toBe(0);
})

test('L Move', () => {
    expect(getRoboPosition('L')).toBe(-1);
})

test('R Move', () => {
    expect(getRoboPosition('R')).toBe(1);
})
