/*

The Challenge:

We have a set of 10 types of fruit:
Apple, Banana, Cherry, Fig, Grape, Honeydew, Kiwi, Lemon, Melon and Strawberry.
You are managing a virtual fruit basket, and you'll be performing several operations to alter the order.

Each operation corresponds to a rule that rearranges or modifies the basket's content,
and you need to apply the operations step by step.

Operations:
Operation 1 (O1): Remove the fruit at the even index (index 0-based) in the basket.
For example, if the basket is ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'],
after applying O1 once, the basket becomes ['Banana', 'Date'] (removes 'Apple', 'Cherry'and 'Elderberry').

Operation 2 (O2): Move the fruit at the last index to the first index.
For example, if the basket is ['Apple', 'Banana', 'Cherry'],
after applying O2 once, the basket becomes ['Cherry', 'Apple', 'Banana'].

Operation 3 (O3): Add a new fruit “Papaya” to the end of the basket.
For example, if the basket is ['Apple', 'Banana'],
after applying O3 once, the basket becomes ['Apple', 'Banana', 'Papaya'].

Operation 4 (O4): Swap the first two fruits in the basket.
For example, if the basket is ['Apple', 'Banana', 'Cherry'],
after applying O4 once, the basket becomes ['Banana', 'Apple', 'Cherry'].

Input:
The input consists of pairs of lines:

The first line in each pair contains the operation number (1, 2, 3, or 4).
The second line contains the number of times that operation should be applied (between 1 and 10).

*/

function manageFruitBasket(inputs) {
    let order = [
        'apple',
        'banana', 
        'cherry',
        'fig',
        'grape',
        'honeydew',
        'kiwi',
        'lemon',
        'melon',
        'strawberry'
    ]

    for ( let { operation, times } of inputs) {
        if (operation === 1) {
            for (let i = 0; i < times; i++) {
                order = order.filter((_, index) => index % 2 !== 0);
            }
        } else if (operation === 2) {
            for (let i = 0; i < times; i++) {
                order.unshift(order.pop());
            }
        } else if (operation === 3) {
            for (let i = 0; i < times; i++) {
                order.push('papaya');
            }
        } else if (operation === 4) {
            for (let i = 0; i < times; i++) {
                [order[0], order[1]] = [order[1], order[0]];
            }
        }
    }

    return order;
}

module.exports = manageFruitBasket;
