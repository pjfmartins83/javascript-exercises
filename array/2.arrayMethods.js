/*

1. Push and Pop:

- Add 60 to the end of the array.
- Remove the last element and print it to the console.

2. Shift and Unshift:

- Add 5 to the beginning of the array.
- Remove the first element and print it.

3. Slice:

- Create a new array containing the second and third elements of the original array using the slice method.
- Print the new array.


**/

const numbers = [10, 20, 30, 40, 50];

numbers.push(60);
console.log('New Array:', numbers);
console.log('Last Element Removed:', numbers.pop());
console.log(numbers);

numbers.unshift(5);
console.log('New Array:', numbers);
console.log('First Element Removed:', numbers.shift());
console.log(numbers);

const newArray = numbers.slice(1, 3);
console.log('New Array:', newArray);
