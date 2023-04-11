const breakCamelCase = require('.')

test('Test 1', () => {
  expect(breakCamelCase('camelCasing')).toBe('camel Casing')
})

test('Test 2', () => {
  expect(breakCamelCase('orwaIsTeaching')).toBe('orwa Is Teaching')
})
