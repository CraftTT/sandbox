// Consider a sequence u where u is defined as follows:
//
//     The number u(0) = 1 is the first one in u.
//     For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
//     There are no other numbers in u.
//     Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]
//
// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...
//
// Task:
//     Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u (so, there are no duplicates).
//
// Example:
//     dbl_linear(10) should return 22
//
// Note:
//     Focus attention on efficiency

//SOLUTION:

function dblLinear(n) {
    const u = [1];
    let x2Index = 0;
    let x3Index = 0;

    while (u.length <= n) {
        const next2 = 2 * u[x2Index] + 1;
        const next3 = 3 * u[x3Index] + 1;
        const next = Math.min(next2, next3);

        if (!u.includes(next)) {
            u.push(next);
        }

        if (next === next2) x2Index++;
        if (next === next3) x3Index++;
    }

    return u[n];
}
console.log(dblLinear(10));
