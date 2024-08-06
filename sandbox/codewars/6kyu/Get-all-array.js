// Extend the Array prototype/class with a function to return all elements of that array, except the ones with the indexes passed in the parameter.
//
//     The function should accept either an array or a single integer as parameters, like this:
//
// var array = ['a', 'b', 'c', 'd', 'e'];
// var array2 = array.except([1,3]);
// // array2 should contain ['a', 'c', 'e']
// or
//
// var array = ['a', 'b', 'c', 'd', 'e'];
// var array2 = array.except(1);
// // array2 should contain ['a', 'c', 'd', 'e']

//SOLUTION:

Array.prototype.except = function(indices) {
    if (!Array.isArray(indices)) indices = [indices];
    return this.filter((_, i) => !indices.includes(i));
};

var array1 = ['a', 'b', 'c', 'd', 'e'];
var result1 = array1.except([1, 3]);
console.log(result1); // Output: ['a', 'c', 'e']

var array2 = ['a', 'b', 'c', 'd', 'e'];
var result2 = array2.except(1);
console.log(result2);
