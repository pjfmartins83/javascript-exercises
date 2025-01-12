/*

The Challenge:

Count the frequency of each letter that appearance in a string.

*/

function countLetters(string) {
    let letters = {}
    string = string.toLowerCase();

    for (i = 0; i < string.length; i++) {        
        if (letters[string[i]]) {
            (letters[string[i]]) += 1;
        } else {
            (letters[string[i]]) = 1;
        }
    }

    return letters;
}

module.exports = countLetters;
