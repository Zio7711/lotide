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
    console.log('These two arrays are equal');
  } else {
    console.log('These two arrays are not equal');
  }
  return;
};

assertArraysEqual([1, 2, 3], [3 ,2 ,1]);
assertArraysEqual([1, 2, 3], [1 ,2 ,3]);