const dirReduc = require('.')

test('Test 1', () => {
  expect(
    dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])
  ).toEqual(['WEST'])
})

test('Test 2', () => {
  expect(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST'])).toEqual([
    'NORTH',
    'WEST',
    'SOUTH',
    'EAST',
  ])
})

test('Test 3', () => {
  expect(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST'])).toEqual([
  ])
})

test('Test 4', () => {
  expect(
    dirReduc(['NORTH', 'NORTH', 'WEST', 'EAST', 'NORTH', 'EAST', 'WEST'])
  ).toEqual(['NORTH', 'NORTH', 'NORTH'])
})