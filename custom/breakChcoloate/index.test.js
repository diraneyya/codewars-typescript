const someFunction = require('.')

test('Test 1', () => {
  expect(someFunction([1,3,5,2,1,5,4,1])).toBe(1)
})