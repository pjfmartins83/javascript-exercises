const wordCount = require('./wordCount');

test('Counts words in a Sentence', () => {
    expect(wordCount("")).toBe(0);
})

test('Counts words in a Sentence', () => {
    expect(wordCount("Hello, World!")).toBe(2);
})

test('Counts words in a Sentence', () => {
    expect(wordCount("This Is A Test")).toBe(4);
})
