const getDronePosition = require('./droneControl');

test('No Moves', () => {
    expect(getDronePosition('H')).toBe[0, 0];
})

test('One Move Up', () => {
    expect(getDronePosition('U')).toBe[1, 0];
})

test('One Move Down', () => {
    expect(getDronePosition('U')).toBe[-1, 0];
})

test('One Move Right', () => {
    expect(getDronePosition('R')).toBe[0, 1];
})

test('One Move Left', () => {
    expect(getDronePosition('U')).toBe[0, -1];
})

test('Example 1', () => {
    expect(getDronePosition('UURRDDLL')).toBe[0, 0];
})

test('Example 2', () => {
    expect(getDronePosition('UUUHRR')).toBe[2, 3];
})

test('Example 3', () => {
    expect(getDronePosition('LLLLDD')).toBe[-4, -2];
})
