const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual.js');

const letterPositions = function(sentence) {
  const results = {};
  for (let index = 0; index < sentence.length; index ++) {
    if (sentence[index] !== ' ') {
      if (results[sentence[index]]) {
        results[sentence[index]].push(index);
      } else {
        results[sentence[index]] = [index];
      }
    }
  }
  return results;
};

// assertArraysEqual(letterPositions("hello").e, [1]);
// console.log(letterPositions("hello"));
module.exports = letterPositions;