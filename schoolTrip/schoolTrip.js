/*

The Challenge:

Students would like to go on a school trip at the end of the
year, but they need money to pay for it. To raise money,
they have organized a brunch. To attend the brunch, a
student in their ﬁrst year pays $12, a student in their
second year pays $10, a student in their third year pays $7,
and a student in their fourth year pays $5.

Of all of the money raised at the brunch, 50 percent of it
can be used to pay for the school trip (the other 50 percent
is used to pay for the brunch itself).

We are told the cost of the school trip, the proportion of
students in each year, and the total number of students.

Determine whether the students need to raise more money
for the school trip.

Input:

The input consists of 10 test cases, with three lines per test
case (30 lines in all). Here are the three lines for each test
case:

1. The ﬁrst line contains the cost in dollars of the school
trip; it’s an integer between 50 and 50,000.

2. The second line contains four numbers indicating the
proportion of brunching students who are in ﬁrst,
second, third, and fourth year, respectively. There is a
space between each pair of numbers. Each number is
between 0 and 1, and their sum is 1 (for 100 percent).

3. The third line contains integer n, the number of students
attending the brunch. n is between 4 and 2,000.

Output:

For each test case: if the students need to raise more
money for the school trip, output YES; otherwise, output NO.

Case Study:

School Trip: $100
Proportion: [0.25, 0.25, 0.25, 0.25]
Students: 100 -> (25 no 1º, 25 no 2º, 25 no 3º e 25 no 4º)

Total Raised = First Year + Second Year + Third Year + Fourth Year
Total Raised = ((12*100*0.25) + (10*100*0.25) + (7*100*0.25) + (5*100*0.25)) 
Total Raised = 300 + 250 + 175 + 125
Total Raised = 850 (before payment)

Total Raised (after payment) = 850 / 2 => 425

425 >= 100 => So, the students don't need more money. Output: NO

**/

function schoolTrip(tripCost, studentProportions, totalStudents) {
    const payments = [12, 10, 7, 5];

    let moneyRaised = 0;
    for (let i = 0; i < studentProportions.length; i++) {
        moneyRaised += payments[i] * (totalStudents * studentProportions[i]);
    }

        return (moneyRaised / 2) >= tripCost ? "NO" : "YES";
}

module.exports = schoolTrip;
