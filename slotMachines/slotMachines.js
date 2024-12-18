function numberOfGames(n, machine1, machine2, machine3) {
    let plays = 0;

    while (n > 0) {
        // First machine
        plays++;
        n--;
        machine1++;
        if (machine1 === 35) {
            n += 30; // Win 30 quarters
            machine1 = 0; // Reset the play counter for the first machine
        }
        if (n === 0) break;

        // Second machine
        plays++;
        n--;
        machine2++;
        if (machine2 === 100) {
            n += 60; // Win 60 quarters
            machine2 = 0; // Reset the play counter for the second machine
        }
        if (n === 0) break;

        // Third machine
        plays++;
        n--;
        machine3++;
        if (machine3 === 10) {
            n += 9; // Win 9 quarters
            machine3 = 0; // Reset the play counter for the third machine
        }
    }

    return plays;
}

module.exports = numberOfGames;
