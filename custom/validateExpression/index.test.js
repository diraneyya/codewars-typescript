const validateExpression = require('.')

test('Test 1', () => {
  expect(validateExpression([1,3,5,2,1,5,4,1])).toBe(1)
})