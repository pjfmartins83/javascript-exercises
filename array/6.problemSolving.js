/*

1. Pair Sum:

- Write a function findPairs(arr, target) that finds all pairs of numbers in an array that sum up to a target number.
Example: For arr = [2, 4, 3, 7, 1, 5] and target = 6, the result should be [[2, 4], [1, 5]].

2. Remove Duplicates in Place:

- Write a function removeDuplicates that removes duplicates from a sorted array without using extra space.
Example: For [1, 1, 2, 2, 3], the result should be [1, 2, 3].

3. Find Missing Number:

- Write a function findMissing that takes an array of numbers from 1 to n with one missing number and returns the missing number.
Example: For arr = [1, 2, 4, 5], the result should be 3.

**/

/*

// Function to calculate bonuses
function calculateBonuses(testCases) {
    const bonuses = [];

    for (const testCase of testCases) {
        const franchisees = testCase.franchisees;
        const days = testCase.days;
        const salesData = testCase.salesData;

        let totalBonuses = 0;

        // Calculate daily bonuses
        for (let day = 0; day < days; day++) {
            let dailyTotal = 0;
            for (let franchisee = 0; franchisee < franchisees; franchisee++) {
                dailyTotal += salesData[day][franchisee];
            }
            if (dailyTotal % 13 === 0) {
                totalBonuses += dailyTotal / 13;
            }
        }

        // Calculate franchisee bonuses
        for (let franchisee = 0; franchisee < franchisees; franchisee++) {
            let franchiseeTotal = 0;
            for (let day = 0; day < days; day++) {
                franchiseeTotal += salesData[day][franchisee];
            }
            if (franchiseeTotal % 13 === 0) {
                totalBonuses += franchiseeTotal / 13;
            }
        }

        bonuses.push(totalBonuses);
    }

    return bonuses;
}

// Example Input
const testCases = [
    {
        franchisees: 4,
        days: 3,
        salesData: [
            [26, 13, 39, 52],
            [13, 26, 39, 52],
            [39, 52, 13, 26]
        ]
    },
    {
        franchisees: 5,
        days: 2,
        salesData: [
            [13, 26, 39, 52, 65],
            [13, 13, 13, 13, 13]
        ]
    }
];

// Run the function and print results
const results = calculateBonuses(testCases);
results.forEach((result, index) => {
    console.log(`Test Case ${index + 1}: ${result} bonuses`);
});

**/

