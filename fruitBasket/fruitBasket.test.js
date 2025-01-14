const manageFruitBasket = require('./fruitBasket');

test('Operation 1, 1 time', () => {
    const inputs = [
        { operation: 1,  times: 1 },
    ]
    const output = [
        'banana',
        'fig',
        'honeydew',
        'lemon',
        'strawberry'
    ]
    expect(manageFruitBasket(inputs)).toStrictEqual(output);
})

test('Operation2, 1 time', () => {
    const inputs = [
        { operation: 2,  times: 1 },
    ]
    const output = [
        'strawberry',
        'apple',
        'banana', 
        'cherry',
        'fig',
        'grape',
        'honeydew',
        'kiwi',
        'lemon',
        'melon',        
    ]
    expect(manageFruitBasket(inputs)).toStrictEqual(output);
})

test('Operation 3, 1 time', () => {
    const inputs = [
        { operation: 3,  times: 1 },
    ]
    const output = [
        'apple',
        'banana', 
        'cherry',
        'fig',
        'grape',
        'honeydew',
        'kiwi',
        'lemon',
        'melon',
        'strawberry',
        'papaya'
    ]
    expect(manageFruitBasket(inputs)).toStrictEqual(output);
})

test('Operation 4, 1 time', () => {
    const inputs = [
        { operation: 4,  times: 1 },
    ]
    const output = [
        'banana',
        'apple', 
        'cherry',
        'fig',
        'grape',
        'honeydew',
        'kiwi',
        'lemon',
        'melon',
        'strawberry',
    ]
    expect(manageFruitBasket(inputs)).toStrictEqual(output);
})
