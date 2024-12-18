/*
A palindrome is a word, sentence, verse, or even number that reads the same 
backward or forward.

The Challenge:

You need to create a function that will receive a string and return a boolean
true for a palindrome and false is not a palindrome.

Input:
kayak

Output:
true

or

Input:
Borrow or rob

Output:
true

Input:
Paulo

Output:
false
**/

function palindrome(string) {
    let reversedWord = '';

    for (let i = 1; i <= string.length; i++) {
        reversedWord += string[string.length - i];
    }
    console.log(reversedWord);
    return reversedWord === string
}
console.log(palindrome('Borrow or rob'));

module.exports = palindrome;
