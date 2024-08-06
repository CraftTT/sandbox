// Longest Common Subsequence (Performance version)
// from Wikipedia:
//     The longest common subsequence (LCS) problem is the problem of finding the longest subsequence common to all sequences in a set of sequences.
//     It differs from problems of finding common substrings: unlike substrings, subsequences are not required to occupy consecutive positions within the original sequences.
//
//     Task
// Write a function lcs that accepts two strings and returns their longest common subsequence as a string. Performance matters.
//
//     Examples
// lcs( "abcdef", "abc" ) => "abc"
// lcs( "abcdef", "acf" ) => "acf"
// lcs( "132535365", "123456789" ) => "12356"
// lcs( "abcdefghijklmnopq", "apcdefghijklmnobq" ) => "acdefghijklmnoq"
// Testing
// This is a performance version of xDranik's kata of the same name.
// This kata, however, has much more full and heavy testing. Intermediate random tests have string arguments of 20 characters; hard random tests 40 characters; extreme 60 characters (characters are chosen out of 36 different ones).
//
// The reference algorithm solves all (12 fixed, 72 intermediate, 24 hard, 12 extreme) tests within ~150ms. The example algorithm without memoisation would take ~15000ms.
//
//     Notes
// The subsequences of "abc" are "", "a", "b", "c", "ab", "ac", "bc", "abc".
// "" is a valid subsequence in this kata, and a possible return value.
//     All inputs will be valid.
//     Two strings may have more than one longest common subsequence. When this occurs, return any of them.
//
// lcs( string0, string1 ) === lcs( string1, string0 )
// Wikipedia has an article that may be helpful.

//SOLUTION:

function lcs(string0, string1) {
    const m = string0.length;
    const n = string1.length;

    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (string0[i - 1] === string1[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    let lcs = [];
    let i = m, j = n;
    while (i > 0 && j > 0) {
        if (string0[i - 1] === string1[j - 1]) {
            lcs.push(string0[i - 1]);
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return lcs.reverse().join('');
}

// Test cases
console.log(lcs("abcdef", "abc"));
console.log(lcs("abcdef", "acf"));
console.log(lcs("132535365", "123456789"));
console.log(lcs("abcdefghijklmnopq", "apcdefghijklmnobq"));
