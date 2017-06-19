'use strict'

const test = require('tape')
const Dedupe = require('./')

const testArray = [
  {name: 'jack', age: 23},
  {name: 'joe', age: 21},
  {name: 'ben', age: 23},
  {name: 'jack', age: 20},
]

const deduplicatedAgeArray = [
  {name: 'jack', age: 23},
  {name: 'joe', age: 21},
  {name: 'jack', age: 20},
]

const deduplicatedNameArray = [
  {name: 'jack', age: 23},
  {name: 'joe', age: 21},
  {name: 'ben', age: 23}
]

const multiKeyDeDupe = [
  {name: 'jack', age: 23},
  {name: 'joe', age: 21}
]

const noDuplicatesKeyValues = [
  {name: 'jack', age: 23},
  {name: 'joe', age: 21},
]

test('age key check', t => {
  t.deepEqual(Dedupe(testArray, ['age']), deduplicatedAgeArray)
  t.end()
})

test('name key check', t => {
  t.deepEqual(Dedupe(testArray, ['name']), deduplicatedNameArray)
  t.end()
})


test('multi key check', t => {
  t.deepEqual(Dedupe(testArray, ['name', 'age']), multiKeyDeDupe)
  t.end()
})

test('No duplicate key values', t => {
  t.deepEqual(Dedupe(testArray), noDuplicatesKeyValues)
  t.end()
})
