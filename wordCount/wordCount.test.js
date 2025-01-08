const getWordCount = require('./wordCount');

test('No words', () => {
    expect(getWordCount('')).toBe(0);
})

test('just 1 word', () => {
    expect(getWordCount('Test')).toBe(1);
})

test('2 words', () => {
    expect(getWordCount('Hello, World!')).toBe(2);
})

test('4 words', () => {
    expect(getWordCount('This Is A Test')).toBe(4);
})
