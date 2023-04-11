"use strict";
/*
  Title:
    Calculating with Functions

  Description:
    This time we want to write calculations using functions and get the results.

    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations:
    plus, minus, times, dividedBy (divided_by in Ruby)

    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand,
    the most inner function represents the right operand

    7 x 5 ====>     times(    five()

  Examples:
    seven(times(five())); // must return 35
    four(plus(nine())); // must return 13
    eight(minus(three())); // must return 5
    six(dividedBy(two())); // must return 3

  Kata Link:
    https://www.codewars.com/kata/calculating-with-functions

  Discuss Link:
    https://www.codewars.com/kata/calculating-with-functions/discuss

  Solutions Link:
    https://www.codewars.com/kata/calculating-with-functions/solutions
*/
const one = () => { };
const two = () => { };
const three = () => { };
const four = () => { };
const five = () => { };
const six = () => { };
const seven = () => { };
const eight = () => { };
const nine = () => { };
const zero = () => { };
const times = () => { };
const plus = () => { };
const minus = () => { };
const dividedBy = () => { };
// Function Export
module.exports = {
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    plus,
    minus,
    times,
    dividedBy,
};
//# sourceMappingURL=index.js.map