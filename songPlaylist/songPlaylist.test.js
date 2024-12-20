const managePlaylist = require('./songPlaylist');

test('Button 4 pressed once', () => {
    const inputs = [
        { button: 4, presses: 1 },
    ]
    const output = ['A', 'B', 'C', 'D', 'E'];
    expect(managePlaylist(inputs)).toEqual(output);
});

test('Button 1 pressed once', () => {
    const inputs = [
        { button: 1, presses: 1 },
    ]
    const output = ['B', 'C', 'D', 'E', 'A'];
    expect(managePlaylist(inputs)).toEqual(output);
});

test('Button 2 pressed once', () => {
    const inputs = [
        { button: 2, presses: 1 },
    ]
    const output = ['E', 'A', 'B', 'C', 'D'];
    expect(managePlaylist(inputs)).toEqual(output);
});

test('Button 3 pressed once', () => {
    const inputs = [
        { button: 3, presses: 1 },
    ]
    const output = ['B', 'A', 'C', 'D', 'E']
    expect(managePlaylist(inputs)).toEqual(output);
});

test('Buttons 1 and 2 pressed once each', () => {
    const inputs = [
        { button: 1, presses: 1 },
        { button: 2, presses: 1 },
    ]
    const output = ['A', 'B', 'C', 'D', 'E']
    expect(managePlaylist(inputs)).toEqual(output);
});
