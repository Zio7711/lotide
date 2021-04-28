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
    console.log('✅✅✅These two arrays are equal, your answer is correct');
  } else {
    console.log('❌❌❌These two arrays are not equal, your answer is wrong');
  }
  return;
};

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

assertArraysEqual(letterPositions("hello").e, [1]);
console.log(letterPositions("hello"));