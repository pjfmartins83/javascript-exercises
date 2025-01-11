const getMbAvailable = require('./dataPlan');

test('1 month, 4mb used', () => {
    expect(getMbAvailable(10, 1, [4])).toBe(6);
})

test('2 months, 12mb used', () => {
    expect(getMbAvailable(10, 2, [4, 12])).toBe(4);
})

test('3 month, 1mb used', () => {
    expect(getMbAvailable(10, 3, [4, 12, 1])).toBe(13);
})

test('4 months, no data used', () => {
    expect(getMbAvailable(10, 4, [4, 12, 1, 0])).toBe(23);
})

/*

(Mês 1) = 10mb
Usou: 4mb
Sobra = 6mb

(Mês 2) = 6mb + 10mb = 16mb
Usou: 12mb
Sobra: 4mb

(Mês 3) = 4mb + 10mb = 14mb
Usou: 1mb
Sobra: 13mb

*/
