const assertEqual = require('./assertEqual.js');

const eqArrays = function(array1, array2) {
  if (array2.length !== array1.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);