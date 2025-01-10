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
*/

function isPalindrome(string) {
    let formattedString = string.replace(/\s+/g, '').toLowerCase();
    let reverseWord = '';

    for (let i = 0; i < formattedString.length; i++) {
        reverseWord = formattedString[i] + reverseWord;
    }

    return reverseWord === formattedString;

}

module.exports = isPalindrome;
