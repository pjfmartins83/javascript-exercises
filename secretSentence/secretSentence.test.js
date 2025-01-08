const decodeSentence = require('./secretSentence');

test('Decode Sentence (one word)', () => {
    const input = 'ipi';
    const output = 'i';
    expect(decodeSentence(input)).toBe(output);
});

test('Decode Sentence (two words)', () => {
    const input = 'ipi lipikepe';
    const output = 'i like';
    expect(decodeSentence(input)).toBe(output);
});

test('Decode Sentence (three words)', () => {
    const input = 'ipi lipikepe yopoupu';
    const output = 'i like you';
    expect(decodeSentence(input)).toBe(output);
});
