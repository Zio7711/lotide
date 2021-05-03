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

const assertArraysEqual = function(array3, array4) {
  if (eqArrays(array3, array4)) {
    console.log(`✅✅✅ ${array3} === ${array4}`);
  } else {
    console.log(`❌❌❌ ${array3} !== ${array4}`);
  }
  return;
};

const map = (array, callback) => {
  const result = [];
  for (let item of array) {
    result.push(callback(item));
  }
  return result;

};

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5]
const strings = ['trees', 'apples', 'toys', 'boys']

const results1 = map(words, word => word[0]);
const results2 = map(numbers, num => num * 2);
const results3 = map(strings, string => string.slice(-1));

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 2, 4, 6, 8, 10 ]);
assertArraysEqual(results3, [ 's', 's', 's', 's' ]);


