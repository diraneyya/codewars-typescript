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

function apply(param : string) : number | string {
  if (param.length >= 3) {
    return eval(param)
  } else return param
}

const one = (param = '') => apply(`1${param}`)
const two = (param = '') => apply(`2${param}`)
const three = (param = '') => apply(`3${param}`)
const four = (param = '') => apply(`4${param}`)
const five = (param = '') => apply(`5${param}`)
const six = (param = '') => apply(`6${param}`)
const seven = (param = '') => apply(`7${param}`)
const eight = (param = '') => apply(`8${param}`)
const nine = (param = '') => apply(`9${param}`)
const zero = (param = '') => apply(`0${param}`)

const times = (param : string) => `*${param}`
const plus = (param : string) => `+${param}`
const minus = (param : string) => `-${param}`
const dividedBy = (param : string) => `/${param}`

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
}
