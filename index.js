var findIndex = require('array-find-index')

module.exports = ArrayDedupe

function ArrayDedupe (arr, keys) {
  // thow if we don't have correct args
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array as first argument')
  } else if (!Array.isArray(keys)) {
    throw new TypeError('Expected an array as second argument')
  }

  // if we don't have an array of any length, return early
  if (arr.length === 0) return arr
  if (keys.length === 0) return arr

  return arr.filter(function (parent, index) {
    var match = findIndex(arr, function (child) {
      return keys.some(function (key) {
        return child[key] === parent[key]
      })
    })

    return match === index
  })
}
