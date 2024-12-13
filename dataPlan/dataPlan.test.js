const dataPlan = require('./dataPlan');

test('One month and used all', () => {
    const planMounthly = 10;
    const months = 1;
    const used = [10];
    expect(dataPlan(planMounthly, months, used)).toBe(10);
});

test('One month and no use', () => {
    const planMounthly = 10;
    const months = 1;
    const used = [0];
    expect(dataPlan(planMounthly, months, used)).toBe(20);
});

test('Two months and partial used', () => {
    const planMounthly = 10;
    const months = 2;
    const used = [0, 5];
    expect(dataPlan(planMounthly, months, used)).toBe(25);
});

/*

Dia 1 (Mês 1) = 10mb
Usou: 0mb
Sobra = 10mb

Dia 1 (Mês 2) = 10mb + 10mb => 20mb
Usou: 5mb
Sobra: 15mb

Dia 1 (Mês 3) = 10mb + 15mb =>25mb
**/
