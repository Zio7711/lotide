const eqArrays = function (array1, array2) {
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

const assertArraysEqual = function (array3, array4) {
  if (eqArrays(array3, array4)) {
    console.log('These two arrays are equal');
  } else {
    console.log('These two arrays are not equal');
  }
  return;
};

/* const without = function(array, itemsToFilter) {
  return array.filter(function(value) {
    return !itemsToFilter.includes(value);
  });
}; */

const without = function (array5, array6) {
  let result = array5
  for (let i = 0; i < array6.length; i++) {
    result = result.filter(function (value) {
      return value !== array6[i]
    }) 
  }; return result
}

// using splice function by cloning a new array of source
/* const without = function (source, itemsToRemoved) {
  let sourceCopy = [...source];
  for (let i = 0; i < itemsToRemoved.length; i ++) {
    for (let j = 0; j < sourceCopy.length; j++) {
      if (sourceCopy[j] === itemsToRemoved[i]) {
        sourceCopy.splice([j],1);
      }    
    }
  }
  console.log(source);
  return sourceCopy;
} */


const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);