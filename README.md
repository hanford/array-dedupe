# array-dedupe

> remove duplicate items from an array of objects


## Install

```
$ npm install --save array-dedupe
```


## Usage

```js
const Dedupe = require('array-dedupe')

// Remove duplicates from an array, with a specified list of keys
const arr =[
  {name: 'jack', age: 23},
  {name: 'joe', age: 21},
  {name: 'ben', age: 23},
  ...
]

Dedupe(arr, ['age'])
//=> [{name: 'jack', age: 23}, {name: 'joe', age: 21}]
```


## API

### DeDupe(input, keys)

Returns a filtered array.

#### input

Type: `Array`

#### keys

Type: `Array` (optional)

N length array of keys to validate against, if not passed in the library will validate every key


## License

MIT © [Jack Hanford](https://jackhanford.com)
