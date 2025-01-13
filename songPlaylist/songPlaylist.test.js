const managePlaylist = require('./songPlaylist');

test('Button 4, pressed 1 once', () => {
    const inputs = [
        { button: 4,  presses: 1 },
    ]
    expect(managePlaylist(inputs)).toStrictEqual(['A', 'B', 'C', 'D', 'E']);
})

test('Button 1 pressed once', () => {
    const inputs = [
        { button: 1, presses: 1 },
    ]
    expect(managePlaylist(inputs)).toStrictEqual(['B', 'C', 'D', 'E', 'A']);
});

test('Button 2 pressed once', () => {
    const inputs = [
        { button: 2, presses: 1 },
    ]
    expect(managePlaylist(inputs)).toStrictEqual(['E', 'A', 'B', 'C', 'D']);
});

test('Button 3 pressed once', () => {
    const inputs = [
        { button: 3, presses: 1 },
    ]
    expect(managePlaylist(inputs)).toStrictEqual(['B', 'A', 'C', 'D', 'E']);
});

test('Buttons 1 and 2 pressed once each', () => {
    const inputs = [
        { button: 1, presses: 1 },
        { button: 2, presses: 1 },
    ]
    expect(managePlaylist(inputs)).toStrictEqual(['A', 'B', 'C', 'D', 'E']);
});
