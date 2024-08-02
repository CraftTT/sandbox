// In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.
//
//     Create as many "shufflings" as you can!
//
//     Examples:
//
// With input 'a':
// Your function should return: ['a']
//
// With input 'ab':
// Your function should return ['ab', 'ba']
//
// With input 'abc':
// Your function should return ['abc','acb','bac','bca','cab','cba']
//
// With input 'aabb':
// Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// Note: The order of the permutations doesn't matter.
//
// Good luck!
//


//SOLUTION:

function permutations(str) {

    function permute(chars) {
        if (chars.length === 1) return [chars];

        const results = [];
        for (let i = 0; i < chars.length; i++) {
            const currentChar = chars[i];
            const remainingChars = chars.slice(0, i) + chars.slice(i + 1);
            const remainingPermutations = permute(remainingChars);
            for (const perm of remainingPermutations) {
                results.push(currentChar + perm);
            }
        }
        return results;
    }

    return Array.from(new Set(permute(str)));
}

console.log(permutations('a'));
console.log(permutations('ab'));
console.log(permutations('abc'));
console.log(permutations('aabb'));