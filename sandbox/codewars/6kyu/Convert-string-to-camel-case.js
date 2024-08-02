// DESCRIPTION:
//     Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
//
//     Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
//
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
//
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

//SOLUTION:

function toCamelCase(str) {

    let parts = str.split(/[-_]/);

    for (let i = 1; i < parts.length; i++) {

        parts[i] = parts[i][0].toUpperCase() + parts[i].slice(1);
    }


    return parts.join('');
}

console.log(toCamelCase("the-stealth-warrior")); // "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")); // "TheStealthWarrior"
console.log(toCamelCase("The_Stealth-Warrior")); // "TheStealthWarrior