function isPalindrome(input) {
    // Normalize the input: remove non-alphanumeric characters and make it lowercase
    const cleanedInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Check if the cleaned string is equal to its reverse
    return cleanedInput === cleanedInput.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome("kayak")); // true
console.log(isPalindrome("Borrow or rob")); // true
console.log(isPalindrome("Paulo")); // false

module.exports = isPalindrome;
