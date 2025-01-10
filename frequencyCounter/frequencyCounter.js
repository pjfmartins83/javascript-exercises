/*

The Challenge:

Count the frequency of each letter that appearance in a string.

*/

function countLetters(string) {
    let letters = {}
    string = string.toLowerCase();

    for (let letter of string) {
        if (letters[letter]) {
            (letters[letter]) += 1;
        } else {
            (letters[letter]) = 1;
        }
    }

    return letters;
}

module.exports = countLetters;
