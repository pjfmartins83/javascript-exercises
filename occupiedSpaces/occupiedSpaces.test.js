const getOccupiedSpaces = require('./occupiedSpaces');

test('1 space, not occupied in both days', () => {
    expect(getOccupiedSpaces(1, '.', '.')).toBe(0);
})

test('1 space, occupied in both days', () => {
    expect(getOccupiedSpaces(1, 'C', 'C')).toBe(1);
})

test('1 space, occupied yesterday and not today', () => {
    expect(getOccupiedSpaces(1, 'C', '.')).toBe(0);
})

test('1 space, not occupied yesterday but today', () => {
    expect(getOccupiedSpaces(1, '.', 'C')).toBe(0);
})

test('2 spaces, none occupied in both days', () => {
    expect(getOccupiedSpaces(2, '..', '..')).toBe(0);
})

test('2 spaces, both occupied in both days', () => {
    expect(getOccupiedSpaces(2, 'CC', 'CC')).toBe(2);
})

test('2 spaces, just one occupied yesterday and both occupied today', () => {
    expect(getOccupiedSpaces(2, 'C.', 'CC')).toBe(1);
})

test('3 spaces, none occupied in both days', () => {
    expect(getOccupiedSpaces(3, '...', '...')).toBe(0);
})

test('3 spaces, all occupied yesterday and just 2 today', () => {
    expect(getOccupiedSpaces(3, 'CCC', 'C.C')).toBe(2);
})

test('3 spaces, all occupied in both days', () => {
    expect(getOccupiedSpaces(3, 'CCC', 'CCC')).toBe(3);
})
