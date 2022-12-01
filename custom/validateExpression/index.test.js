const validateExpression = require('.')

test('Test 1 closing without opening', () => {
  expect(validateExpression('( )  ( ) )')).toBe(false)
})

test('Test 2 two closed', () => {
  expect(validateExpression('( )  ( ) ')).toBe(true)
})

test('Test 3 three closed ', () => {
  expect(validateExpression('( ( )  ( ) )')).toBe(true)
})

test('Test 4 many closed ', () => {
  expect(validateExpression('( )   ((() ) )')).toBe(true)
})

test('Test 5 starts with closing ', () => {
  expect(validateExpression(')()')).toBe(false)
})

test('Test 6 starts with closing ', () => {
  expect(validateExpression(')(')).toBe(false)
})

test('Test 7 closed without opened', () => {
  expect(validateExpression('())(()')).toBe(false)
})

// test('Test 8 falsy variety of brackets ', () => {
//   expect(validateExpression('( {  ] )')).toBe(false)
// })

// test('Test 9 two types of closing brackets ', () => {
//   expect(validateExpression('( {  } )')).toBe(true)
// })

// test('Test 10 three types of closing brackets ', () => {
//   expect(validateExpression('( {  } [ ] )')).toBe(true)
// })

// test('Test 11 three types of closing brackets ', () => {
//   expect(validateExpression('< ( {  } ) >')).toBe(true)
// })

// test('Test 12 starting with closing brackets(big variety) ', () => {
//   expect(validateExpression('> ( ) <')).toBe(false)
// })

// test('Test 13 the hardest ', () => {
//   expect(validateExpression('< ( { ) } ( )  >')).toBe(false)
// })