const coneVolume = require('./coneVolume');

test('Example 1', () => {
    expect(coneVolume(2, 3)).toBeCloseTo(12.56, 0.01);
})

test('Example 2', () => {
    expect(coneVolume(3, 4)).toBeCloseTo(37.68, 0.01)
})
