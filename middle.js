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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Passed: ${actual} !== ${expected}`);
  }
};

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

assertEqual(eqArrays(middle([1]), []), true)
assertEqual(eqArrays(middle([1, 2]), []), true)
assertEqual(eqArrays(middle([1, 2, 3]), [2]), true)
assertEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true)
assertEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true)
assertEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true)
