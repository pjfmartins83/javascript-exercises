/*

Write a function that receives an array and returns another array without duplicates.

Input: [1, 2, 3, 3, 4, 5, 3]
Output: [1, 2, 3, 4, 5]

*/

// function removeDuplicates(arr) {
//     let uniques = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (!uniques.includes(arr[i])) {
//             uniques.push(arr[i]);
//         }
//     }

//     return uniques;
// }

function removeDuplicates(arr) {
    let uniques = [];

    for (let i = 0; i < arr.length; i++) {
        if (!uniques[arr[i]]) {
            uniques.push(arr[i]);
        }
    }

    return uniques;
}

console.log(removeDuplicates([1, 2, 3, 3, 4, 5, 3]));
