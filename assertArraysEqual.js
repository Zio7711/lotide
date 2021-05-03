const eqArrays = require('./eqArrays.js');

const assertArraysEqual = function(array3, array4) {
  if (eqArrays(array3, array4)) {
    console.log(`✅✅✅ Passed: ${array3} === ${array4}`);
  } else {
    console.log(`❌❌❌ Failed: ${array3} !== ${array4}`);
  }
  return;
};

// assertArraysEqual([1, 2, 3], [3 ,2 ,1]);
// assertArraysEqual([1, 2, 3], [1 ,2 ,3]);

module.exports = assertArraysEqual;