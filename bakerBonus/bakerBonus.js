/*

The Challenge:

Baker Brie has a number of franchisees, each of which sells baked goods to consumers.
Having reached the milestone of being in business for 13 years,
Baker Brie will celebrate by awarding bonuses based on sales. 
The bonuses depend on sales per day and sales per franchisee.

Here’s how the bonuses work:

- For every day on which the total sales across all franchisees is a multiple of 13,
that multiple will be given as bonuses.

For example:
A day where the franchisees sold a combined 26 baked goods will add
26 / 13 = 2 bonuses to the total.
27 / 13 = 2.08 => 2 bonuses

- For every franchisee whose total sales across all days is a multiple of 13,
that multiple will be given as bonuses.

For example:
A franchisee that sold a total of 39 baked goods will add
39 / 13 = 3 bonuses to the total.
40 / 13 = 3.08 => 3 bonuses

Determine the total number of bonuses awarded.

Input:

- A line containing the integer number of franchisees f and integer number of days d,
separated by a space. f is between 4 and 130, and d is between 2 and 4,745.

- d lines, one per day, containing f integers separated by spaces.
Each integer speciﬁes a number of sales. 
The ﬁrst of these lines gives the sales for each franchise on the ﬁrst day,
the second gives the sales for each franchise on the second day, and so on. 
Each integer is between 1 and 13,000.


Output: 
For each test case, output the total number of bonuses awarded.

*/

function getTotalBonus(franchises, days, sales) {
    let totalBonus = 0;

    for (let i = 0; i < franchises; i++) {
        let franchiseSales = 0;
        for (let j = 0; j < days; j++) {
            franchiseSales += sales[j][i];
        }
        totalBonus += Math.floor(franchiseSales / 13);
    }

    for (let j = 0; j < days; j++) {
        let dailySales = 0;
        for (let i = 0; i < franchises; i++) {
            dailySales += sales[j][i];
        }
        totalBonus += Math.floor(dailySales / 13);
    }

    return totalBonus;
}

module.exports = getTotalBonus;
