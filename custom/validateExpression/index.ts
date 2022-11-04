/*
  Description:

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

const validateExpression = function () {

  return 1;
}

// Function Export
module.exports = validateExpression
