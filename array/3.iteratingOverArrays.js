/*

1. For Loop:

- Loop through the array and print each element to the console.

2. Map:

- Create a new array where each number in the original array is multiplied by 2.
- Print the new array.

3. Filter:

- Filter out numbers less than 30 and create a new array.
- Print the filtered array.

4. Reduce:

- Use the reduce method to find the sum of all the elements in the array.
- Print the result.

**/

const numbers = [10, 20, 30, 40, 50];

// 1. For Loop
for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 2. Map
const doubledNumbers = numbers.map(i => i * 2);
console.log('Doubled Numbers:', doubledNumbers);


// 3. Filter
const filteresNumbers = numbers.filter(i => i >= 30);
console.log('Filtered Numbers (>= 30):', filteresNumbers);

// 4. Reduce
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of Elements:", sum);
