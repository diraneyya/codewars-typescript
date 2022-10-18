"use strict";
/*
  Title:
    Convert string to camel case

  Description:
    Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

  Examples:
    toCamelCase("the-stealth-warrior")
    // returns "theStealthWarrior"

    toCamelCase("The_Stealth_Warrior")
    // returns "TheStealthWarrior"

  Kata Link:
    https://www.codewars.com/kata/convert-string-to-camel-case

  Discuss Link:
    https://www.codewars.com/kata/convert-string-to-camel-case/discuss

  Solutions Link:
    https://www.codewars.com/kata/convert-string-to-camel-case/solutions
*/
// Short Solution. Regex here => https://regexr.com/3gtji
const toCamelCase = function (param) {
    let counter = 0;
    return param.split(/[-_]/).map(e => (counter++ ? e.charAt(0).toUpperCase() : e.charAt(0)) + e.substring(1)).join('');
};
// Function Export
module.exports = toCamelCase;
//# sourceMappingURL=index.js.map