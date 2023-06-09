"use strict";
/*
  Title:
    Convert PascalCase string into snake_case

  Description:
    Complete the function/method so that it takes CamelCase string
    and returns the string in snake_case notation. Lowercase characters can be numbers.
    If method gets number, it should return string.

  Examples:
    //  returns test_controller
    toUnderscore('TestController');

    // returns movies_and_books
    toUnderscore('MoviesAndBooks');

    // returns app7_test
    toUnderscore('App7Test');

    // returns "1"
    toUnderscore(1);

  Kata Link:
    https://www.codewars.com/kata/convert-pascalcase-string-into-snake-case

  Discuss Link:
    https://www.codewars.com/kata/convert-pascalcase-string-into-snake-case/discuss

  Solutions Link:
    https://www.codewars.com/kata/convert-pascalcase-string-into-snake-case/solutions
*/
// Pascal                 Snake
// TestDejanGeorge ===> test_dejan_george
const toUnderscore = function (example) {
    if (typeof example === 'number')
        return String(example);
    return example.replace(/(?<!^)[A-Z]/g, '_$&').toLowerCase();
};
// Function Export
module.exports = toUnderscore;
//# sourceMappingURL=index.js.map