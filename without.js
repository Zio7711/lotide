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

const without = function(array5, array6) {
  for (let i = 0; i < array6.length; i++) {
    for (let j = 0; j < array5.length; j++) {
      if (array5[j] === array6[i]) {
        array5.splice(j,1);
      }
    }
  }
  console.log(array5);
  return array5;
};

const words = ["hello", "world", "lighthouse",'tom', 'lighthouse'];
without(words, ["lighthouse",'tom']); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);