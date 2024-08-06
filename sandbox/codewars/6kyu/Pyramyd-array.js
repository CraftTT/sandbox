// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.
//
// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s

//SOLUTION:

function pyramid(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        const subarray = Array(i).fill(1);
        result.push(subarray);
    }

    return result;
}

console.log(pyramid(0));
console.log(pyramid(1));
console.log(pyramid(2));
console.log(pyramid(3));
