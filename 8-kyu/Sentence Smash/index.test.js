const smash = require('./index.js')

test('Test 1', () => {
  expect(smash(['hello'])).toBe('hello')
})

test('Test 2', () => {
  expect(smash(['hello', 'world'])).toBe('hello world')
})
