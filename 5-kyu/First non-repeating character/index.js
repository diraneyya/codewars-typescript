"use strict";
/*
  Title:
    First non-repeating character

  Description:
    Write a function named firstNonRepeatingLetter† that takes a string input,
    and returns the first character that is not repeated anywhere in the string.

    For example, if given the input 'stress', the function should return 't',
    since the letter t only occurs once in the string, and occurs first in the string.

    As an added challenge, upper- and lowercase letters are considered the same character,
    but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

    If a string contains all repeating characters, it should return the empty string ("").

    † Note: the function is called firstNonRepeatingLetter for historical reasons,
    but your function should handle any Unicode character.

  Kata Link:
    https://www.codewars.com/kata/first-non-repeating-character

  Discuss Link:
    https://www.codewars.com/kata/first-non-repeating-character/discuss

  Solutions Link:
    https://www.codewars.com/kata/first-non-repeating-character/solutions
*/
// // Version 1 (based on Sveta/Manisha's work)
// const firstNonRepeatingLetter = function (string) {
//   const stringLower = string.toLowerCase();
//   for (var i = 0; i < string.length; i++)
//   {
//     if (stringLower.indexOf(stringLower[i], stringLower.indexOf(stringLower[i]) + 1) == -1)
//     {
//       return string[i];
//     }
//   }
//   return '';
// }
// // Version 2: Based on Alex's solution
// const firstNonRepeatingLetter = function (str) {
//   let newStr = str;
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < str.length; j++) {
//       if (i === j) {
//         continue
//       } else if (str[i].toUpperCase() === str[j].toUpperCase()) {
//         newStr = newStr.replace(`${str[i]}`, '')
//       }
//     }
//   }
//   return newStr.length > 0 ? newStr[0] : '';
// }
// // Version 3: Based on Arkadii's
// const firstNonRepeatingLetter = function (param) {
//   try {
//     param.split('').reduce((a, e) => {
//       if (param.indexOf(e) === param.lastIndexOf(e)) throw e
//     }, '')
//   } catch (solution) {
//     return solution
//   }
//   return ''
// }
// // Version 4: Arkadii's solution: does not work for case insensitive test cases
// const firstNonRepeatingLetter = (param) =>
//   param.split('').reduceRight((a, e) => (param.indexOf(e) === param.lastIndexOf(e) ? e : a), '')
// // Version 4: Arkadii's solution: modified for case insensitive test cases
// const firstNonRepeatingLetter = (param) =>
//   param.split('').reduceRight((a, e) => ([...param.matchAll(RegExp(e, 'gi'))].length === 1 ? e : a), '');
// // Version 4: Arkadii's solution: modified for case insensitive test cases
const firstNonRepeatingLetter = (param) => param.split('').reduceRight((a, e1) => (param.split('').filter(e2 => e1.toLowerCase() === e2.toLowerCase())).length === 1 ? e1 : a, '');
// Function Export
module.exports = firstNonRepeatingLetter;
//# sourceMappingURL=index.js.map