/*

The Challenge:

You are monitoring a group of students in a classroom.
Yesterday, you recorded the status of each student's attendance.
Today, you recorded it again.
You need to calculate the number of students who were present both days.

Input:

1. The first parameter is an integer n, the number of students.

2. The second parameter is a string of n characters representing yesterday's attendance.
Each character is either:
P (present), or
A (absent).
For example: "PAP" means the first student was present, the second was absent, and the third was present.

3. The third parameter is a string of n characters representing today's attendance, in the same format.

Output:

Return an integer indicating the number of students who were present on both days.

*/

function getStudentsAttendance(n, yesterday, today) {
    let attendancelist = 0;

    for (i = 0; i < n; i++) {
        if (yesterday[i] === 'P' && today[i] === 'P') {
            attendancelist += 1;
        }
    }

    return attendancelist;
}

module.exports = getStudentsAttendance;
