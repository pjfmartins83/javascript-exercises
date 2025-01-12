const decodeSentence = require('./secretSentence');

test('Decode Sentence (one word)', () => {
    expect(decodeSentence('ipi')).toBe('i');
})

test('Decode Sentence (two words)', () => {
    expect(decodeSentence('ipi lipikepe')).toBe('i like');
})

test('Decode Sentence (three words)', () => {
    expect(decodeSentence('ipi lipikepe yopoupu')).toBe('i like you');
})
