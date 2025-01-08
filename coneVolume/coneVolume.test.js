const getConeVolume = require('./coneVolume');

test('Example 1', () => {
    expect(getConeVolume(2, 3)).toBeCloseTo(12.56, 0.01);
})

test('Example 2', () => {
    expect(getConeVolume(3, 4)).toBeCloseTo(37.68, 0.01)
})

test('Example 3', () => {
    expect(getConeVolume(5,10)).toBeCloseTo(261.80, 0.01);
})
