const decodeSentence = require('./secretSentence');

test('Decode Sentence (one word)', () => {
    const inputs = 'ipi';
    const output = 'i';
    expect(decodeSentence(inputs)).toBe(output);
});

test('Decode Sentence (two words)', () => {
    const inputs = 'ipi lipikepe';
    const output = 'i like';
    expect(decodeSentence(inputs)).toBe(output);
});

test('Decode Sentence (three words)', () => {
    const inputs = 'ipi lipikepe yopoupu';
    const output = 'i like you';
    expect(decodeSentence(inputs)).toBe(output);
});
