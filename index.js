var findIndex = require('array-find-index')

module.exports = ArrayDedupe

function ArrayDedupe (arr, keys) {
  // thow if we don't have correct args
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array as first argument')
  }

  // if we don't have an array of any length, return early
  if (arr.length === 0) return arr

  return arr.filter(function (parent, index) {
    // if an array isn't passed in, let's check every prop
    keys = keys || Object.keys(parent)
    var match = findIndex(arr, function (child) {
      return keys.some(function (key) {
        return child[key] === parent[key]
      })
    })

    return match === index
  })
}
