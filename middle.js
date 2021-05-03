const eqArrays = require('./eqArrays.js');
const assertEqual = require('./assertEqual');

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  };

  if (array.length % 2 === 0) {
    return [array[array.length / 2 - 1], array[array.length / 2]];
  } else {
    return [array[(array.length - 1) / 2]];
  };
};

/* assertEqual(eqArrays(middle([1]), []), true);
assertEqual(eqArrays(middle([1, 2]), []), true);
assertEqual(eqArrays(middle([1, 2, 3]), [2]), true);
assertEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);
assertEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
assertEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true); */

module.exports = middle;
