/*
  Description:

    Write a function called "validateExpression" that takes a string parameter and
    in this string parameter there are only spaces and parentheses.

    If ever opening parenthesis had a closing parenthesis then the function should
    return "true" otherwise the function should return "false".

  Example:

    validateExpressionEasy("( )  ( ) )") ==> FALSE
    validateExpressionEasy(" ( )  ( ) ") ==> TRUE
    validateExpressionEasy(" ( ( )  ( ) )") ==> TRUE
    validateExpressionEasy("( )   ((() ) )") ==> TRUE
    validateExpressionEasy(")()") ==> FALSE

    validateExpression("( {  ] )") ==> FALSE
    validateExpression("( {  } )") ==> TRUE
    validateExpression("( {  } [ ] )") ==> TRUE
    validateExpression("< ( {  } ) >") ==> TRUE
    validateExpression("> ( ) <") ==> FALSE
    validateExpression(" < ( { ) } ( )  >") ==> FALSE
  */

const validateExpression = function (expression: string): boolean {
  if (!/^[ ()]*$/.test(expression)) throw 'Passed string contains foreign or unexpected characters'

  // Make sure that every "(" is closed with a ")" in the expression variable.
  //
  // EXAMPLES:
  //   validateExpressionEasy("( )  ( ) )") ==> FALSE
  //   validateExpressionEasy(" ( )  ( ) ") ==> TRUE
  //   validateExpressionEasy(" ( ( )  ( ) )") ==> TRUE
  //   validateExpressionEasy("( )   ((() ) )") ==> TRUE
  //   validateExpressionEasy(")()") ==> FALSE
  return expression.split('').reduce(
    (acc  : number, 
      el  : string, 
      _   : number, 
      arr : string[]) : number => {
    if (el === '(') {
      return ++acc;
    } else if (el === ')') {
      return --acc < 0 ? (arr.length = 0) || -1 : acc;
    } else
      return acc;
  }, 0) === 0;
}

// Function Export
module.exports = validateExpression
