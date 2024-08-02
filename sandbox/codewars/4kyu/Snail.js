// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
//
//     array = [[1,2,3],
//     [4,5,6],
//     [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:
//
//     array = [[1,2,3],
//         [8,9,4],
//         [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:
//
//
//     NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.
//
//     NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

//SOLUTION:

function snail(array) {
    const result = [];

    while (array.length) {
        result.push(...array.shift());

        if (array.length === 0 || array[0].length === 0) break;

        for (let i = 0; i < array.length; i++) {
            result.push(array[i].pop());
        }

        if (array.length === 0) break;

        result.push(...array.pop().reverse());

        if (array.length === 0 || array[0].length === 0) break;

        for (let i = array.length - 1; i >= 0; i--) {
            result.push(array[i].shift());
        }
    }

    return result;
}

console.log(snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));


console.log(snail([
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
]));
