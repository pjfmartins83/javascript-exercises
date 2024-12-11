const frequencyCounter = require('./frequencyCounter');

test('An empty string', () => {
    expect(frequencyCounter('')).toEqual({});
});

test('A single character', () => {  
    expect(frequencyCounter('a')).toEqual({a :1});
});

test('Mixed Characters', () => {    
    expect(frequencyCounter('abbccddd')).toEqual({a: 1, b: 2, c: 2, d: 3});
});
