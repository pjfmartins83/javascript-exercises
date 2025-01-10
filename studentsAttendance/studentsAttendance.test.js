const getStudentsAttendance = require('./studentsAttendance');

test('1 student, absent in both days', () => {
    expect(getStudentsAttendance(1, 'A', 'A')).toBe(0);
})

test('1 student, present in both days', () => {
    expect(getStudentsAttendance(1, 'P', 'P')).toBe(1);
})

test('2 students, both present both days', () => {
    expect(getStudentsAttendance(2, 'PP', 'PP')).toBe(2);
})

test('2 students, one was present yesterday and another is present today', () => {
    expect(getStudentsAttendance(2, 'PA', 'AP')).toBe(0);
})

test('2 students, only one is present in both days', () => {
    expect(getStudentsAttendance(2, 'PA', 'PP')).toBe(1);
})
