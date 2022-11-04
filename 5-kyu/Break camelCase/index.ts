/*
  Description:
    Complete the solution so that the function will break up camel casing, using a space between words.

  Example:
    solution('camelCasing') // => should return 'camel Casing'

  Kata Link:
    https://www.codewars.com/kata/break-camelcase

  Discuss Link:
    https://www.codewars.com/kata/zero-fill-dot-dot-dot-for-the-queen/discuss

  Solutions Link:
    https://www.codewars.com/kata/zero-fill-dot-dot-dot-for-the-queen/solutions

*/

// orwaIsTeaching ---> orwa Is Teaching
// camelCase      ---> camel Case

const breakCamelCase = function (param: string) : string {

  let result = ''; //Did something
  for (let i = 0; i < param.length; i++) {
      if (param[i] === param[i].toUpperCase()) {
        result += ' '; 
      }

      result += param[i];
  }

  return result;
}  

 
 

  

// Function Export
module.exports = breakCamelCase