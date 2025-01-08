const schoolTrip = require('./schoolTrip');

test('money raised is sufficient - case study', () => {
    const tripCost = 100;
    const studentProportions = [0.25, 0.25, 0.25, 0.25];
    const totalStudents = 100;
    expect(schoolTrip(tripCost, studentProportions, totalStudents)).toBe("NO");
});

test('money raised is insufficient', () => {
    const tripCost = 5000;
    const studentProportions = [0.25, 0.25, 0.25, 0.25];
    const totalStudents = 100;
    expect(schoolTrip(tripCost, studentProportions, totalStudents)).toBe("YES");
});

test('money raised is sufficient', () => {
    const tripCost = 50;
    const studentProportions = [0.25, 0.25, 0.25, 0.25];
    const totalStudents = 100;
    expect(schoolTrip(tripCost, studentProportions, totalStudents)).toBe("NO");
})
