/*
  Description:
    Complete the solution so that the function will break up camel casing, using 
    a space between words.

  Example:
    solution('camelCasing') // => should return 'camel Casing'

  Kata Link:
    https://www.codewars.com/kata/break-camelcase

  Discuss Link:
    https://www.codewars.com/kata/zero-fill-dot-dot-dot-for-the-queen/discuss

  Solutions Link:
    https://www.codewars.com/kata/zero-fill-dot-dot-dot-for-the-queen/solutionsP

    Mama mia pizzaria
*/

// orwaIsTeaching ---> orwa Is Teaching
// camelCase      ---> camel Case

function breakCamelCase(word : string) :string {
  return word.replace(/[A-Z]/g, ' $&')

    // return word.replace(/([a-z])([A-Z])/g, "$1 $2")
}



module.exports = breakCamelCase;


