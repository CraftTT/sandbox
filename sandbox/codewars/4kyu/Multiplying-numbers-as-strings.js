// This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!
//
//     The arguments are passed as strings.
//     The numbers may be way very large
// Answer should be returned as a string
// The returned "number" should not start with zeros e.g. 0123 is invalid
// Note: 100 randomly generated tests!
//
//     Usage of BigInt is disallowed and will be checked in the full test suite.
//


//SOLUTION:

function multiply(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';

    const len1 = num1.length;
    const len2 = num2.length;
    const result = Array(len1 + len2).fill(0); // Array to store the result of multiplication

    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            const mul = (num1[i] - '0') * (num2[j] - '0');
            const sum = mul + result[i + j + 1];
            result[i + j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);
        }
    }

    let resultStr = result.join('');

    resultStr = resultStr.replace(/^0+/, '');

    return resultStr;
}

console.log(multiply("123", "456"));
console.log(multiply("2", "3"));
console.log(multiply("123456789", "987654321"));
