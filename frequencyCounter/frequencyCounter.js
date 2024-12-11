/*

The Challenge:

Count the frequency of each letter that appearance in a string.

**/

function frequencyCounter(string) {
    const letters = {}
    for (const letter of string) {
        if (letters[letter]) {
            letters[letter] += 1;
        } else {
            letters[letter] = 1;
        }
    }
    return letters;
}

module.exports = frequencyCounter;
