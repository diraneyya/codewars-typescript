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

const breakCamelCase = function (param) {
  const dividedString = param.split("").map((el)=>
    el === el.toUpperCase()? ` ${el}` : el ).join("")
    
  return dividedString;
}  

 
 

  

// Function Export
module.exports = breakCamelCase
